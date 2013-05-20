/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// UnityGUI-based pause menu

#pragma strict

var skin:GUISkin;
var startPaused:boolean = true;
var menutop:int=25;
var hudColor:Color = Color.white;
private var toolbarInt:int=0;
private var toolbarStrings: String[]= ["Audio","Graphics","System"];

// fill in the credit info for your game
var credits:String[]=[
	"A Fugu Games Production",
	"Copyright (c) 2012 Technicat, LLC. All Rights Reserved.",
	"More information at http://fugugames.com/"] ;

enum Page {
	None,Main,Options,Credits
}

private var savedTimeScale:float;
private var currentPage:Page;

function Start() {
	if (startPaused) {
		PauseGame();
	}
}

function Update() {
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		switch (currentPage) {
		case Page.None: PauseGame(); break; // if the pause menu is not displayed, then pause
		case Page.Main: UnPauseGame(); break; // if the main pause menu is displaying, then unpause
		default: currentPage = Page.Main; // any subpage goes back to main page
		}
	}
}

function OnGUI () {
	if (IsGamePaused()) {
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

function ShowCredits() {
	BeginPage(300,300);
	for (var credit in credits) {
		GUILayout.Label(credit);
	}
	EndPage();
}

// options

function ShowOptions() {
	BeginPage(318,300);
	toolbarInt = GUILayout.Toolbar (toolbarInt, toolbarStrings);
	switch (toolbarInt) {
		case 0: ShowAudio(); break;
		case 1: ShowGraphics();  break;
		case 2: ShowSystem(); break;
	}
	EndPage();
}

function Available(isAvailable) {
	return isAvailable ? "Available" : "Not Available";
}

function ShowSystem() {
	GUILayout.Label("Graphics: "+SystemInfo.graphicsDeviceName+" "+
	SystemInfo.graphicsMemorySize+"MB\n"+
	SystemInfo.graphicsDeviceVersion+"\n"+
	SystemInfo.graphicsDeviceVendor);
	GUILayout.Label("Shadows: "+ Available(SystemInfo.supportsShadows));
	GUILayout.Label("Image Effects: "+Available(SystemInfo.supportsImageEffects));
	GUILayout.Label("Render Textures: "+Available(SystemInfo.supportsRenderTextures));
}

function ShowGraphics() {
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

function ShowAudio() {
	GUILayout.Label("Volume");
	AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume,0.0,1.0);
}

function BeginPage(width:int,height:int) {
	GUILayout.BeginArea(Rect((Screen.width-width)/2,menutop,width,height));
}

function EndPage() {
	// show Back button if not Main page
	if (currentPage != Page.Main && GUILayout.Button("Back")) {
		currentPage = Page.Main;
	}
	GUILayout.EndArea();
}

function ShowPauseMenu() {
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
#if !UNITY_WEBPLAYER && !UNITY_EDITOR
	if (GUILayout.Button ("Quit")) {
		Application.Quit();
	}
#endif
	EndPage();
}

function PauseGame() {
	savedTimeScale = Time.timeScale;
	Time.timeScale = 0;
	AudioListener.pause = true;
	currentPage = Page.Main;
}

function UnPauseGame() {
	Time.timeScale = savedTimeScale;
	AudioListener.pause = false;
	currentPage = Page.None;
}

static function IsGamePaused() {
	return Time.timeScale==0;
}



