/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
using UnityEngine;
using System.Collections;

namespace Fugu {
public class AdInterstitial : MonoBehaviour {
		
	public float waitTime = 2.0f;

#if UNITY_IPHONE
	public ADInterstitialAd ad = null;

	// Use this for initialization
	void Start () {
		iPhoneGeneration gen = iPhone.generation;
		if (gen == iPhoneGeneration.iPad1Gen || 
			gen == iPhoneGeneration.iPad2Gen || 
			gen == iPhoneGeneration.iPad3Gen ||
			gen == iPhoneGeneration.iPad4Gen ||
			gen == iPhoneGeneration.iPadMini1Gen ||
			gen == iPhoneGeneration.iPadUnknown) {
		StartCoroutine(LoadAdPage());
		}
	}
	
	IEnumerator LoadAdPage() {
	
		ad = new ADInterstitialAd();
		var startTime = Time.time;
		while (!ad.loaded && ad.error == null && Time.time-startTime<waitTime) {
			yield return null;
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
#endif
}

}
