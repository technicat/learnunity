/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

public var frameRate:int = 60;

function Awake() {
	Application.targetFrameRate = frameRate;
}