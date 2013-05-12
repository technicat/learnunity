/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

#if UNITY_IPHONE
function Start() {
	DontDestroyOnLoad(gameObject);
	Handheld.SetActivityIndicatorStyle(iOSActivityIndicatorStyle.WhiteLarge);
	Handheld.StartActivityIndicator();
}

function OnLevelWasLoaded() {
	Handheld.StopActivityIndicator();
	Destroy(gameObject);
}
#endif