/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
using UnityEngine;
using System.Collections;

namespace Fugu {
public class Splash : MonoBehaviour {
	
	public float waitTime=2; // in seconds
	public string level=""; // scene name to load

	// Use this for initialization
	void Start () {
		UnityEngine.Object.DontDestroyOnLoad(gameObject); // retain this object through a level load
		#if UNITY_IOS
		Handheld.SetActivityIndicatorStyle(UnityEngine.iOS.ActivityIndicatorStyle.Gray);
		#endif
		#if UNITY_ANDROID
		Handheld.SetActivityIndicatorStyle(AndroidActivityIndicatorStyle.InversedLarge);
		#endif
		#if UNITY_IOS || UNITY_ANDROID
		Handheld.StartActivityIndicator();
		#endif
		StartCoroutine (WaitAndLoad ());
	}
		
	IEnumerator WaitAndLoad() {
		yield return new WaitForSeconds(waitTime);
		Application.LoadLevel(level);
		UnityEngine.SceneManagement.SceneManager.LoadScene(level);
	}
	

}
}