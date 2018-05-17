/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
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
#if UNITY_IOS
		Handheld.SetActivityIndicatorStyle(UnityEngine.iOS.ActivityIndicatorStyle.Gray);
#endif
#if UNITY_ANDROID
		Handheld.SetActivityIndicatorStyle(AndroidActivityIndicatorStyle.InversedLarge);
#endif
#if UNITY_IOS || UNITY_ANDROID
		Handheld.StartActivityIndicator();
#endif
		yield return null;
}

	void OnLevelWasLoaded() {
#if UNITY_IOS || UNITY_ANDROID
		Handheld.StopActivityIndicator();
#endif
		GameObject.Destroy(gameObject);
}
	
	
}
	
}