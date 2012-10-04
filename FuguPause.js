/* Copyright (c) 2007-20012 Technicat, LLC */

#pragma strict
#pragma downcast
#pragma implicit

// note a version of this pause menu is also on the Unify wiki and there is a discussion thread specifically for it on the Unity forum
var skin:GUISkin;

var allowPause:boolean = true;
var startPaused:boolean = false;
var lockCursor:boolean = true; // true works better for IE

var legalwidth:int = 120;

var menutop:int=25;

private var gldepth = -0.5;
private var startTime = 0.1;

var mat:Material;

private var tris = 0;
private var verts = 0;
private var savedTimeScale:float;
//private var pauseFilter;

private var showfps:boolean;
private var showtris:boolean;
private var showvtx:boolean;
private var showfpsgraph:boolean;

// minimal piracy check for webplayers
var checklegal:boolean = false;
var publisher = "hyperbowl3d.com";
var srcValue = null;

var lowFPSColor = Color.red;
var highFPSColor = Color.green;

var lowFPS = 30;
var highFPS = 50;

var start:GameObject;

var goal:String = "All your base belong to us!";

var url:String = "index.html";

var statColor:Color = Color.yellow;
var hudColor:Color = Color.white;

// fill in the help text that is initially presented
var help:String[] = ["ESC - pause game"];

// fill in the credit info for your game
var credits:String[]=[
	"A Fugu Games Production",
	"HyperBowl is a trademark of Hyper Entertainment, Plc.",
	"Copyright (c) 2009 Technicat, LLC. All Rights Reserved.",
	"More information at http://hyperbowl3d.com/"] ;
var crediticons:Texture[];

// for playing a movie in the credits screen
// fill in the url of the OGG movie file
// Unity Pro only
//private var movie:MovieTexture;
//var fmv = "cat.ogv";

enum Page {
	None,Main,Options,Credits,Help
}

private var currentPage:Page;

private var fpsarray:int[];
private var fps:float;

function Awake() {
	if (lockCursor) {
		Screen.lockCursor = true;
	}
//	movie = null;
	if (allowPause) {
//		if (fmv != "") {
//			var www = WWW(fmv);
//			movie = www.movie;
//		}
		fpsarray = new int[Screen.width];
		Time.timeScale = 1.0;
		if (startPaused) {
			PauseGame();
		}
	}
}

function Start() {
//	if (allowPause && movie != null) {
//		while (!movie.isReadyToPlay) {
//			yield;
//		}
//		movie.loop = true;
//	}
}

function OnPostRender() {
	if (showfpsgraph && mat != null) {
		GL.PushMatrix ();
		GL.LoadPixelMatrix();
		for (var i = 0; i < mat.passCount; ++i)
		{
			mat.SetPass(i);
			GL.Begin( GL.LINES );
			for (var x=0; x<fpsarray.length; ++x) {
				GL.Vertex3(x,fpsarray[x],gldepth);
			}
		GL.End();
		}
		GL.PopMatrix();
		ScrollFPS();
	}
}

function ScrollFPS() {
	for (var x=1; x<fpsarray.length; ++x) {
		fpsarray[x-1]=fpsarray[x];
	}
	if (fps < 1000) {
		fpsarray[fpsarray.length-1]=fps;
	}
}

static function IsDashboard() {
	return Application.platform == RuntimePlatform.OSXDashboardPlayer;
}

static function IsBrowser() {
	return (Application.platform == RuntimePlatform.WindowsWebPlayer ||
		Application.platform == RuntimePlatform.OSXWebPlayer);
}

static function IsDesktop() {
	return (Application.platform == RuntimePlatform.WindowsPlayer ||
		Application.platform == RuntimePlatform.OSXPlayer);
}

function LateUpdate () {
	if (showfps || showfpsgraph) {
		FPSUpdate();
	}
	if (allowPause && Input.GetKeyDown("escape"))
	 {
		switch (currentPage) {
			case Page.None: PauseGame(); break;
			default: currentPage = Page.Main;
		}
	}
}

function OnGUI () {
	if (skin != null) {
		GUI.skin = skin;
	}
	ShowStatNums();
	if (checklegal) {
		ShowLegal();
	}
	if (IsGamePaused()) {
		GUI.color = hudColor;
		switch (currentPage) {
			case Page.Main: PauseMenu(); break;
			case Page.Options: ShowOptions(); break;
			case Page.Credits: ShowCredits(); break;
			case Page.Help: ShowHelp(); break;
		}
	}	
}

function ShowLegal() {
	if (!IsLegal()) {
		GUI.Label(Rect(Screen.width-legalwidth,Screen.height-20,legalwidth-10,20),
		publisher);
	}
}

function IsLegal() {
	return !IsBrowser() || 
	( IsLegalSrc() && 
	Application.absoluteURL.StartsWith("http://www."+publisher+"/")) ||
	( IsLegalSrc() &&
	Application.absoluteURL.StartsWith("http://"+publisher+"/"));
}

function IsLegalSrc() {
	return (Application.srcValue == null) || (Application.srcValue == srcValue);
}

private var toolbarInt:int=0;
private var toolbarStrings: String[]= ["Audio","Graphics","Controls","Stats","System"];

function ShowOptions() {
	BeginPage(318,300);
	toolbarInt = GUILayout.Toolbar (toolbarInt, toolbarStrings);
	switch (toolbarInt) {
		case 0: VolumeControl(); break;
		case 4: ShowDevice(); break;
		case 1: QualityControl(); Qualities();  break;
		case 3: StatControl(); break;
		case 2: ShowHelp();
	}
	EndPage();
}

function ShowCredits() {
	BeginPage(300,300);
	for (var credit in credits) {
		GUILayout.Label(credit);
	}
	for (var credit in crediticons) {
		GUILayout.Label(credit);
	}
//	if (movie != null) {
//		GUILayout.Box(movie);
//		if (movie.isReadyToPlay) {
//			movie.Play();
//		}
//	}
	EndPage();
}

function ShowHelp() {
	for (var tip in help) {
		GUILayout.Label(tip);
	}
	lockCursor = GUILayout.Toggle(lockCursor,"Hide Cursor");
}


function ShowBackButton() {
	if (GUI.Button(Rect(20,Screen.height-50,50,20),"Back")) {
		currentPage = Page.Main;
	}
}

function Available(isAvailable) {
	return isAvailable ? "Available" : "Not Available";
}

function ShowDevice() {
	GUILayout.Label ("Unity player version "+Application.unityVersion);
	GUILayout.Label("Graphics: "+SystemInfo.graphicsDeviceName+" "+
	SystemInfo.graphicsMemorySize+"MB\n"+
	SystemInfo.graphicsDeviceVersion+"\n"+
	SystemInfo.graphicsDeviceVendor);
	GUILayout.Label("Shadows: "+ Available(SystemInfo.supportsShadows));
	GUILayout.Label("Image Effects: "+Available(SystemInfo.supportsImageEffects));
	GUILayout.Label("Render Textures: "+Available(SystemInfo.supportsRenderTextures));
}

function Qualities() {
	GUILayout.Label(QualitySettings.names[QualitySettings.GetQualityLevel()]);
	GUILayout.Label("Pixel Light Count: "+QualitySettings.pixelLightCount);
	GUILayout.Label("Shadow Cascades: "+QualitySettings.shadowCascades);
	GUILayout.Label("Shadow Distance: "+QualitySettings.shadowDistance);
	GUILayout.Label("Soft Vegetation: "+QualitySettings.softVegetation);
//	GUILayout.Label("Sync to VBL: "+QualitySettings.syncToVBL);
//	Screen.fullScreen = GUILayout.Toggle(Screen.fullScreen,"Full Screen");
}

function QualityControl() {
	GUILayout.BeginHorizontal();
	if (GUILayout.Button("Decrease")) {
		QualitySettings.DecreaseLevel();
	}
	if (GUILayout.Button("Increase")) {
		QualitySettings.IncreaseLevel();
	}
	GUILayout.EndHorizontal();
}

function VolumeControl() {
	GUILayout.Label("Volume");
	AudioListener.volume = GUILayout.HorizontalSlider(AudioListener.volume,0.0,1.0);
	//if (!IsBrowser())
	//speech = GUILayout.Toggle(speech,"Text to Speech");
}

function StatControl() {
	GUILayout.BeginHorizontal();
	showtris = GUILayout.Toggle(showtris,"Triangles");
	showvtx = GUILayout.Toggle(showvtx,"Vertices");
	showfps = GUILayout.Toggle(showfps,"FPS");
	showfpsgraph = GUILayout.Toggle(showfpsgraph,"FPS Graph");
	GUILayout.EndHorizontal();
}

function FPSUpdate() {
	var delta = Time.smoothDeltaTime;
		if (!IsGamePaused() && delta !=0.0) {
			fps = 1 / delta;
		}
}

function ShowStatNums() {
	GUILayout.BeginArea(Rect(Screen.width-100,10,100,200));
	if (showfps) {
		var fpsString= fps.ToString ("#,##0 fps");
		GUI.color = Color.Lerp(lowFPSColor, highFPSColor,(fps-lowFPS)/(highFPS-lowFPS));
		GUILayout.Label (fpsString);
	}
	if (showtris || showvtx) {
		GetObjectStats();
		GUI.color = statColor;
	}
	if (showtris) {
		GUILayout.Label (tris+"tri");
	}
	if (showvtx) {
		GUILayout.Label (verts+"vtx");
	}
	GUILayout.EndArea();
}

function BeginPage(width:int,height:int) {
	 GUILayout.BeginArea(Rect((Screen.width-width)/2,menutop,width,height));
}

function EndPage() {
	GUILayout.EndArea();
	if (currentPage != Page.Main) {
		ShowBackButton();
	}
}

function IsBeginning() {
	return Time.time < startTime;
}


function PauseMenu() {
	BeginPage(200,200);
	if (GUILayout.Button (IsBeginning() ? "Play" : "Continue")) {
		UnPauseGame();
	}
	if (GUILayout.Button ("Options")) {
		currentPage = Page.Options;
	}
	if (GUILayout.Button ("Credits")) {
		currentPage = Page.Credits;
	}
	if (IsDesktop() && GUILayout.Button ("Quit")) {
		Application.Quit();
	}
	if (IsBeginning()) {
		GUILayout.Label(goal);
		GUILayout.Label("Hit ESC key to pause");
	}
	EndPage();
}

function GetObjectStats() {
	verts = 0;
	tris = 0;
	var ob = FindObjectsOfType(GameObject);
	for (var obj in ob) {
		if (obj.active) {
			GetObjectStats(obj);
		}
	}
}

function GetObjectStats(object:GameObject) {
	var filters : MeshFilter[];
	filters = object.GetComponentsInChildren(MeshFilter);
	for( var f : MeshFilter in filters )
	{
    	tris += f.sharedMesh.triangles.Length/3;
  		verts += f.sharedMesh.vertexCount;
	}
}

function PauseGame() {
	savedTimeScale = Time.timeScale;
	Time.timeScale = 0;
	AudioListener.pause = true;
//	if (pauseFilter) pauseFilter.enabled = true;
	currentPage = Page.Main;
	Screen.lockCursor = false;
}

function UnPauseGame() {
	Time.timeScale = savedTimeScale;
	AudioListener.pause = false;
//	if (pauseFilter) pauseFilter.enabled = false;
	currentPage = Page.None;
	if (IsBeginning() && start != null) {
		start.active = true;
	}
//	if (movie != null && movie.isPlaying) {
//		movie.Pause();
//	}
	if (lockCursor) {
		Screen.lockCursor = true;
	}
}

static function IsGamePaused() {
	return Time.timeScale==0;
}

function OnApplicationPause(pause:boolean) {
	if (IsGamePaused()) {
		AudioListener.pause = true;
//		if (movie != null && movie.isReadyToPlay) {
//			movie.Play();
//		}
	}
}


