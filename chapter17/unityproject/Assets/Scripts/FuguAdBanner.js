/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

#pragma strict

public var showOnTop:boolean = true; // banner on top or bottom of screen
public var dontDestroy:boolean = false; // keep this GameObject around for next scene

public var AdMobID:String = "";

#if UNITY_IPHONE

// don't make this a local variable, or else it'll get garbage collected
private var banner:ADBannerView;

function Start () {
	if (dontDestroy) {
		GameObject.DontDestroyOnLoad(gameObject); // keep ad alive if we load a new scene
	}
	Debug.Log("Creating iAd banner");
	banner = new ADBannerView();
	banner.autoSize = true;
	banner.autoPosition = showOnTop ? ADPosition.Top : ADPosition.Bottom;
	while (!banner.loaded && banner.error == null) {
		yield;
	}
	if (banner.error == null) {
		Debug.Log("iAd banner shown");
		banner.Show();
	} else {
		Debug.Log("iAd banner error: "+banner.error.description);
		banner = null;
	}
}
#endif

#if UNITY_ANDROID && !NOOK
function Start() {
	AdMobAndroid.init(AdMobID);
	AdMobAndroid.createBanner( AdMobAndroidAd.smartBanner,
		showOnTop ?   AdMobAdPlacement.TopCenter: AdMobAdPlacement.BottomCenter );
}
#endif
