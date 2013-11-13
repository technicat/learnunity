/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// this is updated with the much simpler API in Unity 4.3

using UnityEngine;
using System.Collections;

namespace Fugu {

public class AdBanner : MonoBehaviour {
		
	public bool showOnTop = true;
	public bool dontDestroy = true;
#if UNITY_IPHONE
	private ADBannerView banner = null;
		
	void Start() {
		if (dontDestroy) {
				GameObject.DontDestroyOnLoad(gameObject); // keep ad alive if we load a new scene
		}
		banner = new ADBannerView(ADBannerView.Type.Banner,showOnTop ? 
			                          ADBannerView.Layout.Top : ADBannerView.Layout.Bottom);
		ADBannerView.onBannerWasLoaded  += OnBannerLoaded;
	}

	void OnBannerLoaded() {
			Debug.Log("Ad banner Loaded!\n");
			banner.visible = true;
		}
#endif
}
	
} // end namespace
