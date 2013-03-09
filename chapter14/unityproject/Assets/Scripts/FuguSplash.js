#pragma strict

var waitTime:float=2; // in seconds
var level:String; // scene name to load

function Start() {
	UnityEngine.Object.DontDestroyOnLoad(gameObject); // retain this object through a level load
	Handheld.SetActivityIndicatorStyle(iOSActivityIndicatorStyle.Gray);
	Handheld.StartActivityIndicator();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel(level);
}

function OnLevelWasLoaded() {
	Handheld.StopActivityIndicator();
	UnityEngine.Object.Destroy(gameObject);
}
