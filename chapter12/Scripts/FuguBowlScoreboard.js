#pragma strict

var style:GUIStyle; // customize the appearance

var baseScreenWidth:float = 320.0; // for iOS, the screen width we think we're rendering on

function OnGUI() {
#if UNITY_IPHONE
	var guiScale:float = Screen.width/baseScreenWidth;
	GUI.matrix = Matrix4x4.TRS (Vector3.zero, Quaternion.identity, Vector3(guiScale, guiScale, 1));
#endif
	for (var f:int=0; f<10; f++) {
		var score:String="";
		var roll1:int = FuguBowlStateMachine.GetCurrentPlayer().scores[f].ball1;
		switch (roll1) {
			case -1: score += " "; break;
			case 10: score +="X"; break;
			default: score += roll1;
		}
		score+="/";
		if (FuguBowlStateMachine.IsSpare(f)) {
			score +="I";
		} else {
			var roll2:int = FuguBowlStateMachine.GetCurrentPlayer().scores[f].ball2;
			switch (roll2) {
			case -1: score += " "; break;
			case 10: score +="X"; break;
			default: score += roll2;
			}
		}
		if (f==9) {
			score+="/";
			if (FuguBowlStateMachine.IsSpare(f)) {
				score +="I";
			} else {
				var roll3:int = FuguBowlStateMachine.GetCurrentPlayer().scores[f].ball3;
				switch (roll3) {
				case -1: score += " "; break;
				default: score += roll3;
				}
			}
		}
		GUI.Label(Rect(f*30+5,5,50,20),score,style);
	}
}