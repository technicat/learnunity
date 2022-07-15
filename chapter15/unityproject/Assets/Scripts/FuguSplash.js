/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

#pragma strict

var waitTime:float=2; // in seconds
var level:String; // scene name to load

function Start() {
	yield WaitForSeconds(waitTime);
	SceneManagement.SceneManager.LoadScene(level);
}
