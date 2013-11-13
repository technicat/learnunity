/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// this is updated with the much simpler API in Unity 4.3

using UnityEngine;
using System.Collections;

namespace Fugu {
public class AdInterstitial : MonoBehaviour {

#if UNITY_IPHONE
	public ADInterstitialAd ad = null;

	// Use this for initialization
	void Start () {
		if (ADInterstitialAd.isAvailable) {
				ad = new ADInterstitialAd();
				ADInterstitialAd.onInterstitialWasLoaded  += OnFullscreenLoaded;
		}
	}
		
	void OnFullscreenLoaded() {
			ad.Show();
	}
#endif
}

}
