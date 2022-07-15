/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
#pragma strict

#if UNITY_IPHONE
function Start() {
	DontDestroyOnLoad(gameObject);
	Handheld.SetActivityIndicatorStyle(UnityEngine.iOS.ActivityIndicatorStyle.WhiteLarge);
	Handheld.StartActivityIndicator();
}

function OnLevelWasLoaded() {
	Handheld.StopActivityIndicator();
	Destroy(gameObject);
}
#endif