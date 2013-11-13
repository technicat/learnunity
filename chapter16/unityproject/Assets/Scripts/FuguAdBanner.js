/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

// this is updated with the much simpler API in Unity 4.3


#pragma strict

public var showOnTop:boolean = true; // banner on top or bottom of screen
public var dontDestroy:boolean = false; // keep this GameObject around for next scene

#if UNITY_IPHONE

// don't make this a local variable, or else it'll get garbage collected
private var banner:ADBannerView;

function Start () {
	if (dontDestroy) {
		GameObject.DontDestroyOnLoad(gameObject); // keep ad alive if we load a new scene
	}
	Debug.Log("Creating iAd banner");
	banner = new ADBannerView(ADBannerView.Type.Banner,showOnTop ? 
			                          ADBannerView.Layout.Top : ADBannerView.Layout.Bottom);
	ADBannerView.onBannerWasLoaded  += OnBannerLoaded;
}

function OnBannerLoaded() {
			Debug.Log("Ad banner Loaded!\n");
			banner.visible = true;
}
#endif
