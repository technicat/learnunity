/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

#pragma strict
#pragma downcast

var ball:GameObject; // bowling ball

var pin:GameObject; // pin prefab to instantiate
var pinPos:Vector3 = Vector3(0,1,20); // position to place rack of pins
var pinDistance = 1.0; // initial distance between pins
var pinRows = 4; // number of pin rows

var sunkHeight:float = -10.0; //

private var roll:Roll; // the current roll in the current frame
private var frame:int=0; // current frame, ranges for 0-9 (representing 1-10)

static var player:FuguBowlPlayer = null; // the player (contains the frame scores)

private var pins:Array; // instantiated bowling pins
private var pinBodies:GameObject[]; // the real physical pins

private var state:String; // current state in the state machine

enum Roll {
	Ball1,
	Ball2,
	Ball3
}

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
	pinBodies = GameObject.FindGameObjectsWithTag("Pin");
}

function GetPinsDown():int {
	var pinsDown:int = 0;
	for (var pin:GameObject in pinBodies) {
		if (pin.GetComponent(FuguPinStatus).IsKnockedOver()) {
			++pinsDown;
		}
	}
	return pinsDown;
}

function RemoveDownedPins() {
	for (var pin:GameObject in pinBodies) {
		if (pin.GetComponent(FuguPinStatus).IsKnockedOver()) {
			pin.SetActive(false);
		}
	}
}

// reset game objects

function ResetBall() {
	ball.GetComponent(FuguForce).enabled = true;
	ball.SendMessage("ResetPosition");
}

function ResetPins() {
	for (var pin:GameObject in pinBodies) {
		pin.SetActive(true);
		pin.SendMessage("ResetPosition");
	}
}

function ResetCamera() {
	var follow:Behaviour = Camera.main.GetComponent("SmoothFollow");
	if (follow != null) {
		follow.enabled = true;
	}
	Camera.main.SendMessage("ResetPosition");
}

function ResetEverything() {
	ResetBall();
	ResetPins();
	ResetCamera();
}

// create player and pins

function Awake() {
	player = new FuguBowlPlayer();
	CreatePins();
}

// state machine

function Start() {
	state="StateNewGame";
	while (true) {
		Debug.Log("State "+state);
		yield StartCoroutine(state);
		yield;
	}
}

function StateNewGame() {
	player.ClearScore();
	frame = 0;
	state="StateBall1";
}

function StateBall1() {
	ResetEverything(); // reset pins, camera and ball
	roll = Roll.Ball1;
	state="StateRolling";
}

function StateBall2() {
	ResetBall();
	ResetCamera();
	if (GetPinsDown()==10) {
		ResetPins();
	} else {
		RemoveDownedPins();
	}
	roll = Roll.Ball2;
	state="StateRolling";
}

function StateBall3() {
	ResetBall();
	ResetCamera();
	if (GetPinsDown()==10) {
		ResetPins();
	} else {
		RemoveDownedPins();
	}
	roll = Roll.Ball3;
	state="StateRolling";
}

function StateRolling() {
	while (true) {
		// let go of the ball when we reach the pins
		if (ball.transform.position.z>pinPos.z) {
			state = "StateRolledPast";
			return;
		}
		// gutterball
		if (ball.transform.position.y<sunkHeight) {
			state = "StateGutterBall";
			return;
		}	
		yield;
	}
}

function StateRolledPast() {
	var follow:Behaviour = Camera.main.GetComponent("SmoothFollow");
	if (follow != null) {
		follow.enabled = false;
	}
	ball.GetComponent(FuguForce).enabled = false;
	yield WaitForSeconds(5);
	state = "StateRollOver";
}

function StateGutterBall() {
	state = "StateRollOver";
}

function StateRollOver() {
	var pinsDown:int = GetPinsDown();
//	Debug.Log("pins down: "+pinsDown);
	switch (roll) {
		case Roll.Ball1: player.SetBall1Score(frame,pinsDown); break;
		case Roll.Ball2: player.SetBall2Score(frame,pinsDown); break;
		case Roll.Ball3: player.SetBall3Score(frame,pinsDown); break;
	}
	if (roll == Roll.Ball1 && player.IsStrike(frame)) {
		state = "StateStrike";
		return;
	}
	if (roll == Roll.Ball2 && player.IsSpare(frame)) {
		state = "StateSpare";
		return;
	}
	state = "StateKnockedSomeDown";
}

function StateSpare() {
	state="StateNextBall";
}

function StateStrike() {
	state = "StateNextBall";
}

function StateKnockedSomeDown() {
	state="StateNextBall";
}

function StateNextBall() {
	if (frame == 9) { // last frame
		switch (roll) {
			case Roll.Ball1: // always has a second roll
			 state = "StateBall2";
			 break;
			case Roll.Ball2: // bonus roll if we got a spare or strike
				if (player.IsSpare(frame) || player.IsStrike(frame)) {
					state = "StateBall3";
				} else {
					state = "StateGameOver";
				}
				break;
			case Roll.Ball3:
				state = "StateGameOver";
				break;
		}
		// all other frames
	} else if (roll == Roll.Ball1 && !player.IsStrike(frame)) {
				state = "StateBall2";
			} else {
				++frame;
				state = "StateBall1";
			}
	}

function StateGameOver() {
	Debug.Log("Final Score: "+player.GetScore(9));
	state="StateNewGame";
}
