#pragma strict

public var frameRate:int = 60;

function Awake() {
	Application.targetFrameRate = frameRate;
}