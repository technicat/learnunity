/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

public class Bowl : MonoBehaviour {
 	public GameObject ball; // bowling ball
	public GameObject pin; // pin prefab to instantiate
	public Vector3 pinPos = new Vector3(0,1,20); // position to place rack of pins
	public float pinDistance = 1.0f; // initial distance between pins
	public int pinRows = 4; // number of pin rows
	public float sunkHeight = -10.0f; //
	public float rolledPastTime = 5.0f; // wait time in StateRolledPast
	public float gameOverTime = 5.0f; // wait time in StateGameOver
	public string leaderboardID = "com.technicat.fugubowl.highscore";
	public string spareAchievementID = "com.technicat.fugubowl.spare";
	public string  strikeAchievementID = "com.technicat.fugubowl.strike";

	private Roll roll; // the current roll in the current frame
	private int frame=0; // current frame, ranges for 0-9 (representing 1-10)

	static public BowlPlayer player = null; // the player (contains the frame scores)

	private ArrayList pins; // instantiated bowling pins
	private GameObject[] pinBodies; // the real physical pins

	private string state; // current state in the state machine

enum Roll {
	Ball1,
	Ball2,
	Ball3
}

void CreatePins() {
	pins = new ArrayList();
	var offset = Vector3.zero;
	for (var row=0; row<pinRows; ++row) {
		offset.z+=pinDistance;
		offset.x=-pinDistance*row/2;
		for (var n=0; n<=row; ++n) {
			pins.Add(Instantiate(pin, pinPos+offset, Quaternion.identity));
			offset.x+=pinDistance;
		}
		
	}
	pinBodies = GameObject.FindGameObjectsWithTag("Pin");
}

int GetPinsDown() {
	int pinsDown = 0;
	foreach (GameObject pin in pinBodies) {
		if (pin.GetComponent<PinStatus>().IsKnockedOver()) {
			++pinsDown;
		}
	}
	return pinsDown;
}

void RemoveDownedPins() {
	foreach (GameObject pin in pinBodies) {
		if (pin.GetComponent<PinStatus>().IsKnockedOver()) {
			pin.SetActive(false);
		}
	}
}

// reset game objects

void ResetBall() {
	ball.GetComponent<Force>().enabled = true;
	ball.SendMessage("ResetPosition");
}

void ResetPins() {
	foreach (GameObject pin in pinBodies) {
		pin.SetActive(true);
		pin.SendMessage("ResetPosition");
	}
}

void ResetCamera() {
	Behaviour follow = Camera.main.GetComponent("SmoothFollow") as Behaviour;
	if (follow != null) {
		follow.enabled = true;
	}
	Camera.main.SendMessage("ResetPosition");
}

void ResetEverything() {
	ResetBall();
	ResetPins();
	ResetCamera();
}

// create player and pins

void Awake() {
	player = new BowlPlayer();
	CreatePins();
}

// state machine

IEnumerator Start() {
	state="StateNewGame";
	while (true) {
		Debug.Log("State "+state);
		yield return StartCoroutine(state);
		yield return null;
	}
	yield break;
}

IEnumerator StateNewGame() {
	player.ClearScore();
	frame = 0;
	state="StateBall1";
	yield break;
}

IEnumerator StateBall1() {
	ResetEverything(); // reset pins, camera and ball
	roll = Roll.Ball1;
	state="StateRolling";
	yield break;
}

IEnumerator StateBall2() {
	ResetBall();
	ResetCamera();
	if (GetPinsDown()==10) {
		ResetPins();
	} else {
		RemoveDownedPins();
	}
	roll = Roll.Ball2;
	state="StateRolling";
	yield break;
}

IEnumerator StateBall3() {
	ResetBall();
	ResetCamera();
	if (GetPinsDown()==10) {
		ResetPins();
	} else {
		RemoveDownedPins();
	}
	roll = Roll.Ball3;
	state="StateRolling";
	yield break;
}

IEnumerator StateRolling() {
	while (true) {
		// let go of the ball when we reach the pins
		if (ball.transform.position.z>pinPos.z) {
			state = "StateRolledPast";
			yield break;
		}
		// gutterball
		if (ball.transform.position.y<sunkHeight) {
			state = "StateGutterBall";
			yield break;
		}	
		yield return null;
	}
	yield break;
}

IEnumerator StateRolledPast() {
	Behaviour follow = Camera.main.GetComponent("SmoothFollow") as Behaviour;
	if (follow != null) {
		follow.enabled = false;
	}
	ball.GetComponent<Force>().enabled = false;
	yield return new WaitForSeconds(rolledPastTime);
	state = "StateRollOver";
	yield break;
}

IEnumerator StateGutterBall() {
	state = "StateRollOver";
	yield break;
}

IEnumerator StateRollOver() {
	int pinsDown = GetPinsDown();
//	Debug.Log("pins down: "+pinsDown);
	switch (roll) {
		case Roll.Ball1: player.SetBall1Score(frame,pinsDown); break;
		case Roll.Ball2: player.SetBall2Score(frame,pinsDown); break;
		case Roll.Ball3: player.SetBall3Score(frame,pinsDown); break;
	}
	if (roll == Roll.Ball1 && player.IsStrike(frame)) {
		state = "StateStrike";
		yield break;
	}
	if (roll == Roll.Ball2 && player.IsSpare(frame)) {
		state = "StateSpare";
		yield break;
	}
	state = "StateKnockedSomeDown";
	yield break;
}

IEnumerator StateSpare() {
	GameCenter.Achievement(spareAchievementID,100);
	state="StateNextBall";
	yield break;
}

IEnumerator StateStrike() {
	GameCenter.Achievement(strikeAchievementID,100);
	state = "StateNextBall";
	yield break;
}

IEnumerator StateKnockedSomeDown() {
	state="StateNextBall";
	yield break;
}

IEnumerator StateNextBall() {
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
			yield break;
	}

IEnumerator StateGameOver() {
	Debug.Log("Final Score: "+player.GetScore(9));
	GameCenter.Score(leaderboardID,player.GetScore(9));
	yield return new WaitForSeconds(gameOverTime);
	state="StateNewGame";
	yield break;
}

}
}