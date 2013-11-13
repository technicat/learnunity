/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

// this is updated with the much simpler API in Unity 4.3

#pragma strict

#if UNITY_IPHONE
private var ad:ADInterstitialAd = null;

function Start() {
	if (ADInterstitialAd.isAvailable) {
		ad = new ADInterstitialAd();
		ADInterstitialAd.onInterstitialWasLoaded  += OnFullscreenLoaded;
	}
}

function OnFullscreenLoaded() {
	ad.Show();
}
#endif