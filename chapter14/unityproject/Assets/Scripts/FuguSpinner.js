/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
#pragma strict

#if UNITY_IPHONE
function Start() {
	GameObject.DontDestroyOnLoad(this.gameObject);
	Handheld.SetActivityIndicatorStyle(iOSActivityIndicatorStyle.WhiteLarge);
	Handheld.StartActivityIndicator();
}

function OnLevelWasLoaded() {
	Handheld.StopActivityIndicator();
	GameObject.Destroy(gameObject);
}
#endif