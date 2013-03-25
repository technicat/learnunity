/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

#pragma strict

var waitTime:float = 2.0;

#if UNITY_IPHONE
private var ad:ADInterstitialAd = null;

function Start() {
	if (iPhone.generation == iPhoneGeneration.iPad1Gen || 
		iPhone.generation == iPhoneGeneration.iPad2Gen || 
		iPhone.generation == iPhoneGeneration.iPad3Gen ||
		iPhone.generation == iPhoneGeneration.iPad4Gen ||
		iPhone.generation == iPhoneGeneration.iPadMini1Gen ||
		iPhone.generation == iPhoneGeneration.iPadUnknown) {
		ad = new ADInterstitialAd();
		var startTime = Time.time;
		while (!ad.loaded && ad.error == null && Time.time-startTime<waitTime) {
			yield;
		}
		if (ad.loaded && ad.error == null) {
			Debug.Log("iAd page shown");
			ad.Present();
		} else {
			if (ad.error != null) {
				Debug.Log("iAd page error: "+ad.error.description);
			} else {
				Debug.Log("iAd page timed out");
			}
			ad = null;
		}
	}
}
#endif