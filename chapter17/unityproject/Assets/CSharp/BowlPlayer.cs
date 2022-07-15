using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {
public class BowlPlayer {

	
	public BowlScore[] scores; // all 10 frames of the game
	
	// constructor
	 public BowlPlayer() {
		scores = new BowlScore[10];
		for (int i=0; i<scores.Length; ++i) {
			scores[i] = new BowlScore();
		}
		ClearScore();
	}
	
	// reset the score for all frames
	public void ClearScore() {
		foreach (BowlScore score in scores) {
			score.Clear();
		}
	}
	
	// return total score at frame, -1 if score is not finalized
	public int GetScore(int frame) {
		if (frame==0 || scores[frame].total==-1) {
			return scores[frame].total;
		} else {
			int prev = GetScore(frame-1);
			if (prev==-1) {
				return -1;
			} else {
				return scores[frame].total+prev;
			}
		}
	}
	
	public bool IsSpare(int frame) {
		return scores[frame].IsSpare();
	}

	public bool IsStrike(int frame) {
		return scores[frame].IsStrike();
	}
	
	// set the ball 1 score of the current frame
	public void SetBall1Score(int frame,int pinsDown) {
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
	public void SetBall2Score(int frame,int pinsDown) {
		BowlScore framescore = scores[frame];
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
	public void SetBall3Score(int frame,int pinsDown) {
		BowlScore framescore = scores[frame];
		if (IsStrike(frame) && framescore.ball2 <10) {
			framescore.ball3 = pinsDown - framescore.ball2;
		} else {
			framescore.ball3 = pinsDown; // spare or two strikes
		}
		framescore.total = framescore.ball1+framescore.ball2+framescore.ball3;
	}


	// calculate and set the spare score for the given frame
	public void SetSpareScore(int frame) {
		BowlScore framescore = scores[frame];
		// the score is the score of both rolls in this frame and teh first roll of the next
		framescore.total = framescore.ball1+framescore.ball2+scores[frame+1].ball1;
	}
	
	// calculate and set the strike score for the given frame
	// not called for the final frame
	public void SetStrikeScore(int frame) {
		BowlScore framescore = scores[frame];
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
}
