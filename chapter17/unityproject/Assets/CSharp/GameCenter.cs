/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
using UnityEngine;
using System.Collections;

#if UNITY_IOS
using UnityEngine.SocialPlatforms.GameCenter;
#endif

namespace Fugu {
	
sealed public class GameCenter : MonoBehaviour {

	public bool showAchievementBanners = true;
	// Use this for initialization
	void Start () {
	#if UNITY_IPHONE
	Social.localUser.Authenticate ( (bool success) => {
        if (success && showAchievementBanners) {
			GameCenterPlatform.ShowDefaultAchievementCompletionBanner(showAchievementBanners);
			Debug.Log ("Authenticated "+Social.localUser.userName);
        }
		else {
			Debug.Log ("Failed to authenticate "+Social.localUser.userName);
		}
	}
    );
#endif
	}
		
	static public void Achievement(string name,double score) {
#if UNITY_IOS
	if (Social.localUser.authenticated) {
		Social.ReportProgress(name,score, (bool success) => {
			if (success) {
				Debug.Log("Achievement "+name+" reported successfully");
			} else {
				Debug.Log("Failed to report achievement "+name);
			}
		});
	}
#endif
}

	static public void Score(string name,long score) {
#if UNITY_IOS
	if (Social.localUser.authenticated) {
		  Social.ReportScore (score, name, (bool success) => {
			if (success) {
				Debug.Log("Posted "+score+" on leaderboard "+name);
			} else {
				Debug.Log("Failed to post "+score+" on leaderboard "+name);
			}
		});
	}
#endif
}
	
}
}