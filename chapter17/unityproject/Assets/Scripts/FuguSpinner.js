/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
#pragma strict

#if UNITY_IPHONE
function Start() {
	GameObject.DontDestroyOnLoad(this.gameObject);
	StartCoroutine(StartActivityIndicator());
}

function StartActivityIndicator () {
	Handheld.SetActivityIndicatorStyle(iOSActivityIndicatorStyle.Gray);
	Handheld.StartActivityIndicator();
	yield;
}

function OnLevelWasLoaded() {
	Handheld.StopActivityIndicator();
	GameObject.Destroy(gameObject);
}
#endif