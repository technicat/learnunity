using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {
public class PauseMenu : MonoBehaviour {
	public GUISkin skin;
public bool startPaused = true;
public int menutop = 50;
public Color hudColor = Color.white;

// fill in the credit info for your game
public string[] credits = {
	"A Fugu Games Production",
	"Copyright (c) 2012 Technicat, LLC. All Rights Reserved.",
	"More information at http://fugugames.com/"} ;
	
public float shakeThreshold = 5.0f;
	
public float baseScreenWidth = 320.0f; // target screen width on iOS

enum Page {
	None,Main,Options,Credits,Help
}

private float startTime = 0.1f;
private float savedTimeScale;

private Page currentPage;

// make these floats so that we can multiply without always rounding to an int
private float screenWidth;
private float screenHeight;

void Awake() {
#if UNITY_IPHONE || UNITY_ANDROID
	screenWidth = Screen.width;
	screenHeight = Screen.height;
#else
	screenWidth = 400;
	screenHeight = 400;
#endif
}

void Start() {
	if (startPaused) {
		PauseGame();
	}
}

void Update() {
#if !UNITY_IPHONE
	if (Input.GetKeyDown(KeyCode.Escape))
#else
	if (Input.acceleration.sqrMagnitude>shakeThreshold)
#endif
	{
		switch (currentPage) {
			case Page.None: PauseGame(); break; // if the pause menu is not displayed, then pause
			case Page.Main:
#if NOOK
			Application.Quit();
#else
			UnPauseGame();
#endif
		 	break; // if the main pause menu is displaying, then unpause
			default: currentPage = Page.Main; break; // any subpage goes back to main page
		}
	}
}

void OnGUI () {
	if (IsGamePaused()) {
#if UNITY_IPHONE || UNITY_ANDROID
		float guiScale = screenWidth/baseScreenWidth;
		GUI.matrix = Matrix4x4.TRS (Vector3.zero, Quaternion.identity, new Vector3(guiScale, guiScale, 1));
#endif
		if (skin != null) {
			GUI.skin = skin;
		} else {
			GUI.color = hudColor;
		}
		switch (currentPage) {
			case Page.Main: ShowPauseMenu(); break;
			case Page.Options: ShowOptions(); break;
			case Page.Credits: ShowCredits(); break;
		}
	}	
}
// credits

void ShowCredits() {
	BeginPage(300,300);
	foreach (string credit in credits) {
		GUILayout.Label(credit);
	}
	EndPage();
}

// options

private int toolbarInt = 0;
private string[] toolbarStrings = { "Audio","Graphics","System" };

void ShowOptions() {
	BeginPage(318,300);
	toolbarInt = GUILayout.Toolbar (toolbarInt, toolbarStrings);
	switch (toolbarInt) {
		case 0: ShowAudio(); break;
		case 1: ShowGraphics();  break;
		case 2: ShowSystem(); break;
	}
	EndPage();
}

string Available(bool isAvailable) {
	return isAvailable ? "Available" : "Not Available";
}

void ShowSystem() {
	GUILayout.Label("Graphics: "+SystemInfo.graphicsDeviceName+" "+
	SystemInfo.graphicsMemorySize+"MB\n"+
	SystemInfo.graphicsDeviceVersion+"\n"+
	SystemInfo.graphicsDeviceVendor);
	GUILayout.Label("Shadows: "+ Available(SystemInfo.supportsShadows));
	GUILayout.Label("Image Effects: "+Available(SystemInfo.supportsImageEffects));
}

void ShowGraphics() {
	GUILayout.Label(QualitySettings.names[QualitySettings.GetQualityLevel()]);
	GUILayout.Label("Pixel Light Count: "+QualitySettings.pixelLightCount);
	GUILayout.Label("Shadow Cascades: "+QualitySettings.shadowCascades);
	GUILayout.Label("Shadow Distance: "+QualitySettings.shadowDistance);
	GUILayout.Label("Soft Vegetation: "+QualitySettings.softVegetation);
	GUILayout.BeginHorizontal();
	if (GUILayout.Button("Decrease")) {
		QualitySettings.DecreaseLevel();
	}
	if (GUILayout.Button("Increase")) {
		QualitySettings.IncreaseLevel();
	}
	GUILayout.EndHorizontal();
}

void ShowAudio() {
	GUILayout.Label("Volume");
	AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume,0.0f,1.0f);
}

void BeginPage(int width,int height) {
#if !UNITY_IPHONE && !UNITY_ANDROID
	GUILayout.BeginArea(new Rect((Screen.width-width)/2,menutop,width,height));
#else
	GUILayout.BeginArea(new Rect((baseScreenWidth-width)/2,menutop,width,height));
#endif
}

void EndPage() {
	// show Back button if not Main page
	if (currentPage != Page.Main && GUILayout.Button("Back")) {
		currentPage = Page.Main;
	}
	GUILayout.EndArea();
}


void ShowPauseMenu() {
	BeginPage(150,300);
	if (GUILayout.Button ("Play")) {
		UnPauseGame();
	}
	if (GUILayout.Button ("Options")) {
		currentPage = Page.Options;
	}
	if (GUILayout.Button ("Credits")) {
		currentPage = Page.Credits;
	}
#if UNITY_IPHONE
	if (GUILayout.Button ("High Scores")) {
		Social.ShowLeaderboardUI();
	}
	if (GUILayout.Button ("Achievements")) {
		Social.ShowAchievementsUI();
	}
#endif
#if !UNITY_IPHONE && !UNITY_WEBPLAYER && !UNITY_EDITOR
	if (GUILayout.Button ("Quit")) {
		Application.Quit();
	}
#endif
	EndPage();
}

void PauseGame() {
	savedTimeScale = Time.timeScale;
	Time.timeScale = 0;
	AudioListener.pause = true;
	currentPage = Page.Main;
}

void UnPauseGame() {
	Time.timeScale = savedTimeScale;
	AudioListener.pause = false;
	currentPage = Page.None;
}

static bool IsGamePaused() {
	return Time.timeScale==0;
}

}

}