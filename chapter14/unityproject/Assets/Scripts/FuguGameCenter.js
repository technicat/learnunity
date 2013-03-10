#pragma strict

import UnityEngine.SocialPlatforms.GameCenter;

var showAchievementBanners:boolean = true;

function Start() {
	Social.localUser.Authenticate (function (success) {
        if (success && showAchievementBanners) {
		GameCenterPlatform.ShowDefaultAchievementCompletionBanner(showAchievementBanners);
		Debug.Log ("Authenticated "+Social.localUser.userName);
        }
		else {
			Debug.Log ("Failed to authenticate "+Social.localUser.userName);
		}
    });
}

static function Achievement(name:String,score:double) {
	if (Social.localUser.authenticated) {
		Social.ReportProgress(name,score, function(success) {
			Debug.Log("Achievement "+name+" reported successfully");
		});
	}
}

static function Score(name:String,score:double) {
	if (Social.localUser.authenticated) {
		  Social.ReportScore (score, name, function(success) {
			if (success) {
				Debug.Log("Posted "+score+" on leaderboard "+name);
			} else {
				Debug.Log("Failed to post "+score+" on leaderboard "+name);
			}
		});
	}
}

static function ShowAchievements() {
	Social.ShowAchievementsUI();
}

static function ShowScores() {
	Social.ShowLeaderboardUI();
}

