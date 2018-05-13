/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {
public class BowlScore {

	public int ball1; // pins down for ball 1
	public int ball2; // pins down for ball 2
	public int ball3; // pins down for ball 3
	public int total; // total score for this frame (may include future rolls)
	
	public void Clear() {
		ball1 = -1;
		ball2 = -1;
		ball3 = -1;
		total = -1;
	}
	
	public bool IsSpare() {
		// doesn't handle spare on ball3
		return !IsStrike() &&
			(ball1 + ball2 == 10);
	}

	 public bool IsStrike() {
		return ball1 == 10;
	}
}

}
