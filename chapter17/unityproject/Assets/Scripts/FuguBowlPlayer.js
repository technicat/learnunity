/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/


// bowling score for a player

#pragma strict

// the score for a single bowling frame
// -1 means that ball has not been rolled
class FuguBowlScore {
	var ball1:int; // pins down for ball 1
	var ball2:int; // pins down for ball 2
	var ball3:int; // pins down for ball 3
	var total:int; // total score for this frame (may include future rolls)
	
	function Clear() {
		ball1 = -1;
		ball2 = -1;
		ball3 = -1;
		total = -1;
	}
	
	function IsSpare():boolean {
		// doesn't handle spare on ball3
		return !IsStrike() &&
			(ball1 + ball2 == 10);
	}

	function IsStrike():boolean {
		return ball1 == 10;
	}
}

// minimal player class, just has score information
class FuguBowlPlayer {
	var scores:FuguBowlScore[]; // all 10 frames of the game
	
	// constructor
	function FuguBowlPlayer() {
		scores = new FuguBowlScore[10];
		for (var i:int=0; i<scores.length; ++i) {
			scores[i] = new FuguBowlScore();
		}
		ClearScore();
	}
	
	// reset the score for all frames
	function ClearScore() {
		for (var score:FuguBowlScore in scores) {
			score.Clear();
		}
	}
	
	// return total score at frame, -1 if score is not finalized
	function GetScore(frame:int):int {
		if (frame==0 || scores[frame].total==-1) {
			return scores[frame].total;
		} else {
			var prev:int = GetScore(frame-1);
			if (prev==-1) {
				return -1;
			} else {
				return scores[frame].total+prev;
			}
		}
	}
	
	function IsSpare(frame:int):boolean {
		return scores[frame].IsSpare();
	}

	function IsStrike(frame:int):boolean {
		return scores[frame].IsStrike();
	}
	
	// set the ball 1 score of the current frame
	function SetBall1Score(frame:int,pinsDown:int) {
		scores[frame].ball1=pinsDown;
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
	function SetBall2Score(frame:int,pinsDown:int) {
		var framescore:FuguBowlScore = scores[frame];
		if (IsStrike(frame)) { // we must be in the final frame
			framescore.ball2=pinsDown;
		} else {
			framescore.ball2=pinsDown-framescore.ball1;
		}
		// calculate this frame's total score if it isn't a spare or strike
		if (!IsSpare(frame) && !IsStrike(frame)) {
			framescore.total= pinsDown;
		}
		// if previous frame was a strike then set that frame's score
		if (frame>0 && IsStrike(frame-1)) {
			SetStrikeScore(frame-1);
		}
	}
	
	
// set the ball 3 score of the current frame (final frame)
	function SetBall3Score(frame:int,pinsDown:int) {
		var framescore:FuguBowlScore = scores[frame];
		if (IsStrike(frame) && framescore.ball2 <10) {
			framescore.ball3 = pinsDown - framescore.ball2;
		} else {
			framescore.ball3 = pinsDown; // spare or two strikes
		}
		framescore.total = framescore.ball1+framescore.ball2+framescore.ball3;
	}


	// calculate and set the spare score for the given frame
	function SetSpareScore(frame:int) {
		var framescore:FuguBowlScore = scores[frame];
		// the score is the score of both rolls in this frame and teh first roll of the next
		framescore.total = framescore.ball1+framescore.ball2+scores[frame+1].ball1;
	}
	
	// calculate and set the strike score for the given frame
	// not called for the final frame
	function SetStrikeScore(frame:int) {
		var framescore:FuguBowlScore = scores[frame];
		framescore.total = framescore.ball1;
		// always add the score from first roll of the next frame
		framescore.total+=scores[frame+1].ball1;
		// if not the ninth or tenth frame, and the next frame is a strike, then add the the ball1 score from the frame after that
		if (frame < 8 && IsStrike(frame+1)) {
			framescore.total+=scores[frame+2].ball1;
		} else {
			// for the ninth frame (frame 8) add the second ball from the next (final) frame (there always is one)
			framescore.total+=scores[frame+1].ball2;
		}
	}

}