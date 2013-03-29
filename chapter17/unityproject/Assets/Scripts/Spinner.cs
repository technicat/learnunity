/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
using UnityEngine;
using System.Collections;

namespace Fugu {
public class Spinner : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GameObject.DontDestroyOnLoad(this.gameObject);
		StartCoroutine(StartActivityIndicator());
	}
		
	IEnumerator StartActivityIndicator () {
		#if UNITY_IPHONE
		Handheld.SetActivityIndicatorStyle(iOSActivityIndicatorStyle.Gray);
		#endif
		#if UNITY_ANDROID
		Handheld.SetActivityIndicatorStyle(AndroidActivityIndicatorStyle.InversedLarge);
		#endif
		Handheld.StartActivityIndicator();
		yield return null;
}

	void OnLevelWasLoaded() {
		Handheld.StopActivityIndicator();
		GameObject.Destroy(gameObject);
}
	
	
}
	
}