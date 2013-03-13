#pragma strict

import UnityEngine.SocialPlatforms.GameCenter;

var showAchievementBanners:boolean = true;

function Start() {
#if UNITY_IPHONE
	Social.localUser.Authenticate (function (success) {
        if (success && showAchievementBanners) {
			GameCenterPlatform.ShowDefaultAchievementCompletionBanner(showAchievementBanners);
			Debug.Log ("Authenticated "+Social.localUser.userName);
        }
		else {
			Debug.Log ("Failed to authenticate "+Social.localUser.userName);
		}
    });
#endif
}

static function Achievement(name:String,score:double) {
#if UNITY_IPHONE
	if (Social.localUser.authenticated) {
		Social.ReportProgress(name,score, function(success) {
			if (success) {
				Debug.Log("Achievement "+name+" reported successfully");
			} else {
				Debug.Log("Failed to report achievement "+name);
			}
		});
	}
#endif
}

static function Score(name:String,score:double) {
#if UNITY_IPHONE
	if (Social.localUser.authenticated) {
		  Social.ReportScore (score, name, function(success) {
			if (success) {
				Debug.Log("Posted "+score+" on leaderboard "+name);
			} else {
				Debug.Log("Failed to post "+score+" on leaderboard "+name);
			}
		});
	}
#endif
}

static function ShowAchievements() {
#if UNITY_IPHONE
	Social.ShowAchievementsUI();
#endif
}

static function ShowScores() {
#if UNITY_IPHONE
	Social.ShowLeaderboardUI();
#endif
}

