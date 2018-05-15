using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

public class BowlScoreboard : MonoBehaviour {

	public GUIStyle style; // customize the appearance
public float baseScreenWidth = 320.0f; // for iOS, the screen width we think we're rendering on

void OnGUI() {
	useGUILayout = false;
#if UNITY_IPHONE || UNITY_ANDROID
	float guiScale = Screen.width/baseScreenWidth;
	GUI.matrix = Matrix4x4.TRS (Vector3.zero, Quaternion.identity, new Vector3(guiScale, guiScale, 1));
#endif
	for (int f=0; f<10; f++) {
		string score="";
		BowlScore framescore = Bowl.player.scores[f];
		int roll1 = framescore.ball1;
		int roll2 = framescore.ball2;
		int roll3 = framescore.ball3;
		switch (roll1) {
			case -1: score += " "; break;
			case 10: score +="X"; break;
			default: score += roll1; break;
		}
		score+="/";
		if (Bowl.player.IsSpare(f)) {
			score +="I";
		} else {
			switch (roll2) {
				case -1: score += " "; break;
				case 10: score +="X"; break;
				default: score += roll2; break;
			}
		}
		if (f==9) {
			score+="/";
			if (10==roll2+roll3) {
				score +="I";
			} else {
				switch (roll3) {
					case -1: score += " "; break;
					case 10: score +="X"; break;
					default: score += roll3; break;
				}
			}
		}
		var y = 25;
		GUI.Label(new Rect(f*30+5,y,50,20),score,style);
		int total=Bowl.player.GetScore(f);
		if (total != -1) {
			GUI.Label(new Rect(f*30+5,y+15,50,20)," "+total,style);
		}
	}
}
}

}