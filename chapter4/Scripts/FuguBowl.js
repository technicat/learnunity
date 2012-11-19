/* Copyright (c) 2007 Technicat, LLC */

#pragma strict

var pin:Transform; // pin prefab to instantiate
var pinPos:Vector3 = Vector3(0,0,20); // position to place rack of pins

var pinDistance = 1.0; // initial distance between pins
var pinRows = 4; // number of pin rows

var ball:GameObject; // the bowling ball

var waitBeforeRoll:float = 2.0;

var knockedAngle = 45.0;
var sunkHeight:float = -10.0;

private var pins:Array;


function Start () {
	CreatePins();
	yield WaitForSeconds(waitBeforeRoll);
	ball.GetComponent(FuguForce).enabled = true;
}

function CreatePins() {
	pins = new Array();
	var offset = Vector3.zero;
	for (var row=0; row<pinRows; ++row) {
		offset.z+=pinDistance;
		offset.x=-pinDistance*row/2;
		for (var n=0; n<=row; ++n) {
			pins.push(Instantiate(pin, pinPos+offset, Quaternion.identity));
			offset.x+=pinDistance;
		}
		
	}
}

// reset game objects
function ResetBall() {
	ball.SendMessage("ResetPosition");
}

function ResetPins() {
	for (var pin:Transform in pins) {
		pin.SendMessage("ResetPosition");
	}
}

function ResetCamera() {
	Camera.main.SendMessage("ResetPosition");
}

function ResetEverything() {
	ResetBall();
	ResetPins();
	ResetCamera();
}

function GetPinsDown() {
	var knockedOver = 0;
	for (var pin:Transform in pins) {
		if (transform.localEulerAngles.x>knockedAngle ||
		    pin.transform.localEulerAngles.z>knockedAngle) 
			++knockedOver;
	}
	return knockedOver;
}

function Update() {
	if (ball.transform.position.y<sunkHeight || GetPinsDown()==10) {
		ResetEverything();
	}
}

