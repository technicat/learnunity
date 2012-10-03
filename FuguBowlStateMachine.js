#pragma strict

var ball:GameObject;
var waitBeforeRoll:float = 2.0;

var pin:Transform; // pin prefab to instantiate
var pinPos:Vector3 = Vector3(0,0,20); // position to place rack of pins
var pinDistance = 1.0; // initial distance between pins
var pinRows = 4; // number of pin rows
private var pins:Array;

var cheer:AudioClip;
var boo:AudioClip;
var OK:AudioClip;

var sunkHeight:float = -10.0;

private var knockedAngle = 45.0;

function CreatePins() {
	pins = new Array();
	var offset = Vector3.zero;
	for (var row=0; row<pinRows; ++row) {
		offset.z+=pinDistance;
		offset.x=-pinDistance*row/2;
		for (var n=0; n<=row; ++n) {
			pins.push(Instantiate(pin, pinPos+offset, Quaternion.identity));
			offset.x+=pinDistance;
		}
		
	}
}

// current frame, ranges for 0-9 (representing 1-10)
private var frame:int;

enum Roll {
	Ball1,
	Ball2,
	Ball3
}

private var roll:Roll; // the current roll in the current frame

// bowling score

class FrameScore {
	var ball1:int;
	var ball2:int;
	var ball3:int;
	var total:int;
}

static var currentplayer:int;

static var numplayers:int = 1;

class Player {
	var name:String;
	var scores:FrameScore[];
}

static var players:Player[];

function InitPlayers() {
	players = new Player[numplayers];
	for (var p:int = 0; p<numplayers; ++p) {
		players[p]=new Player();
		players[p].scores = new FrameScore[10];
		for (var i:int=0; i<players[p].scores.length; ++i) {
			players[p].scores[i] = new FrameScore();
		}
		players[p].name =  "Player"+(p+1)+"Name";
	}
}


function ClearScore(p:int) {
	for (var i:int=0; i<players[p].scores.length; ++i) {
		var score:FrameScore = players[p].scores[i];
		score.ball1=-1;
		score.ball2=-1;
		score.ball3=-1;
		score.total=-1;
	}
}

// set the ball 1 score of the current frame
function SetBall1Score() {
	var scores:FrameScore[] = GetCurrentPlayer().scores;
	var score:int = GetPinsDown();
	var framescore:FrameScore = scores[frame];
	framescore.ball1=score;
	// if previous frame was a spare, set its score
	if (frame>0 && IsSpare(frame-1)) {
		SetSpareScore(frame-1);
	}
	// if the previous two frames were strikes, then set the score of the first frame
	if (frame>1 && IsStrike(frame-1) && IsStrike(frame-2)) {
		SetStrikeScore(frame-2);
	}
}

// set the ball 2 score of the current frame
function SetBall2Score() {
	var scores:FrameScore[] = GetCurrentPlayer().scores;
	var score:int = GetPinsDown();
	var framescore:FrameScore = scores[frame];
	if (IsStrike(frame)) {
		framescore.ball2=score; // final frame
	} else {
		framescore.ball2=score-framescore.ball1;
	}
	// calculate this frame's score if it isn't a spare or strike
	if (!IsSpare(frame) && !IsStrike(frame)) {
		framescore.total= score;
	}
	// if previous frame was a strike then set its score
	if (frame>0 && IsStrike(frame-1)) {
		SetStrikeScore(frame-1);
	}
}

// set the ball 3 score of the current frame (final frame)
function SetBall3Score() {
	var scores:FrameScore[] = GetCurrentPlayer().scores;
	var score:int = GetPinsDown();
	var framescore:FrameScore = scores[frame];
	if (IsStrike(frame) && framescore.ball2 <10) {
		framescore.ball3 = score - framescore.ball2;
	} else {
		framescore.ball3 = score; // spare or two strikes
	}
	framescore.total = framescore.ball1+framescore.ball2+framescore.ball3;
}

// calculate and set the strike score for the given frame
// not called for the final frame
function SetStrikeScore(f:int) {
	var scores:FrameScore[] = GetCurrentPlayer().scores;
	var framescore:FrameScore = scores[f];
	framescore.total = framescore.ball1;
	// always add the score from first roll of the next frame
	framescore.total+=scores[f+1].ball1;
	// if not the ninth or tenth frame, and the next frame is a strike, then add the the ball1 score from the frame after that
	if (f < 8 && IsStrike(f+1)) {
		framescore.total+=scores[f+2].ball1;
	} else {
		// for the ninth frame (frame 8) add the second ball from the next (final) frame (there always is one)
		framescore.total+=scores[f+1].ball2;
	}
}

// calculate and set the spare score for the given frame
function SetSpareScore(f:int) {
	var scores:FrameScore[] = GetCurrentPlayer().scores;
	var framescore:FrameScore = scores[f];
	// the score is the score of both rolls in this frame and teh first roll of the next
	framescore.total = framescore.ball1+framescore.ball2+scores[f+1].ball1;
}


static function GetCurrentPlayer():Player {
	return players[currentplayer];
}

static function GetPlayerName(p:int) {
	return players[p].name;
}

static function GetCurrentScores():FrameScore[] {
	return GetCurrentScores(currentplayer);
}

static function GetCurrentScores(p:int):FrameScore[] {
	return players[p].scores;
}

static function GetSinglePlayerScore():int {
	return GetScore(9,0);
}

static function GetScore(f:int):int {
	return GetScore(f,currentplayer);
}

// return score for given player and frame, -1 if score has not finalized
static function GetScore(f:int, playerindex:int):int {
	var scores:FrameScore[] = GetCurrentScores(playerindex);
	if (f==0 || scores[f].total==-1) {
		return scores[f].total;
	} else {
		var prev:int = GetScore(f-1,playerindex);
		if (prev==-1) {
			return -1;
		} else {
			return scores[f].total+prev;
		}
	}
}

static function IsStrike(f:int):boolean {
	return IsStrike(f,currentplayer);
}

static function IsStrike(f:int, playerindex:int):boolean {
	var scores:FrameScore[] = GetCurrentScores(playerindex);
	var framescore:FrameScore = scores[f];
	return framescore.ball1 == 10;
}

static function IsSpare(f:int):boolean {
	return IsSpare(f,currentplayer);
}

static function IsSpare(f:int, playerindex:int):boolean {
	var scores:FrameScore[] = GetCurrentScores(playerindex);
	var framescore:FrameScore = scores[f];
	// doesn't handle spare on ball3
	return !IsStrike(f,playerindex) &&
		(framescore.ball1 + framescore.ball2 == 10);
}

// reset game objects
function ResetBall() {
	ball.SendMessage("ResetPosition");
}

function ResetPins() {
	for (var pin:Transform in pins) {
		pin.SendMessage("ResetPosition");
	}
}

function ResetCamera() {
	Camera.main.SendMessage("ResetPosition");
}

function ResetEverything() {
	ResetBall();
	ResetPins();
	ResetCamera();
}	

function GetPinsDown() {
	var knockedOver = 0;
	for (var pin:Transform in pins) {
		if (transform.localEulerAngles.x>knockedAngle ||
		    pin.transform.localEulerAngles.z>knockedAngle) 
			++knockedOver;
	}
	return knockedOver;
}

// state machine

private var state:String;

function Start() {
	InitPlayers();
	CreatePins();
	yield WaitForSeconds(waitBeforeRoll);
	ball.GetComponent(FuguForce).enabled = true;
	state="StateNewGame";
	while (true) {
		Debug.Log("State "+state);
		yield StartCoroutine(state);
	}
}

function StateNewGame() {
	for (var p:int=0; p<numplayers; ++p) {
		ClearScore(p);
	}
	frame = 0;
	currentplayer=0;
	state="StateBall1";
}

function StateBall1() {
	ResetEverything(); // reset pins, camera and ball
	roll = Roll.Ball1;
	state="StateRolling";
}

function StateBall2() {
	if (GetPinsDown()==10) {
		ResetEverything();
	} else {
		ResetBall();
	}
	roll = Roll.Ball2;
	state="StateRolling";
}

function StateBall3() {
	if (GetPinsDown()==10) {
		ResetEverything();
	} else {
		ResetBall();
	}
	roll = Roll.Ball3;
	state="StateRolling";
}

function StateRolling() {
	while (ball.transform.position.y>sunkHeight && GetPinsDown()<10) {
		yield;
	}
	state = "StateRollOver";
}

function StateRollOver() {
	switch (roll) {
		case Roll.Ball1: SetBall1Score(); break;
		case Roll.Ball2: SetBall2Score(); break;
		case Roll.Ball3: SetBall3Score(); break;
	}
	if (roll == Roll.Ball1 && IsStrike(frame)) {
		state = "StateStrike";
		return;
	}
	if (roll == Roll.Ball2 && IsSpare(frame)) {
		state = "StateSpare";
		return;
	}
	state = "StateKnockedSomeDown";
}

function StateSpare() {
//	BroadcastMessage("Score","Spare!");
	var audio:AudioSource = GetComponent(AudioSource);
	if (audio) {
		audio.clip=cheer;
		audio.Play();
	}
	state="StateNextBall";
}

function StateStrike() {
//	BroadcastMessage("Score","Strike!");
	var audio:AudioSource = GetComponent(AudioSource);
	if (audio) {
		audio.clip=cheer;
		audio.Play();
	}
	state = "StateNextBall";
}

function StateKnockedSomeDown() {
//	BroadcastMessage("Score",""+GetPinsDown()+" pins!");
	var audio:AudioSource = GetComponent(AudioSource);
	if (audio) {
		audio.clip=OK;
		audio.Play();
	}
	state="StateNextBall";
}

function StateNextBall() {
	if (frame == 9) {
		switch (roll) {
			case Roll.Ball1:
			 state = "StateBall2";
			 break;
			case Roll.Ball2:
				if (IsSpare(frame) || IsStrike(frame)) {
					state = "StateBall3";
				} else {
					if (++currentplayer < numplayers) {
					//	UpdateName();
						state = "StateBall1";
					} else {
						state = "StateGameOver";
					}
				}
				break;
			case Roll.Ball3:
				if (++currentplayer < numplayers) {
						//UpdateName();
						state = "StateBall1";
					} else {
						state = "StateGameOver";
					}
				return;
		}
	} else if (roll == Roll.Ball1 && !IsStrike(frame)) {
				state = "StateBall2";
			} else {
				if (++currentplayer < numplayers) {
				} else {
					++frame;
					currentplayer = 0;
				}
				//UpdateName();
				state = "StateBall1";
			}
	}

function StateGameOver() {
//	BroadcastMessage("Score","Game Over");
	state="StateNewGame";
}
