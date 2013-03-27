using UnityEngine;

using UnityEngine.SocialPlatforms.GameCenter;

namespace Fugu {
	
sealed public class GameCenter : MonoBehaviour {

	public bool showAchievementBanners = true;
	// Use this for initialization
	void Start () {
	#if UNITY_IPHONE
	Social.localUser.Authenticate ( success => {
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
#if UNITY_IPHONE
	if (Social.localUser.authenticated) {
		Social.ReportProgress(name,score, success => {
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
#if UNITY_IPHONE
	if (Social.localUser.authenticated) {
		  Social.ReportScore (score, name, success => {
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