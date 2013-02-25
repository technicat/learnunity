#pragma strict

var pin:GameObject; // pin prefab to instantiate
var pinPos:Vector3 = Vector3(0,1,20); // position to place rack of pins

var pinDistance = 1.5; // initial distance between pins
var pinRows = 4; // number of pin rows

var ball:GameObject; // the bowling ball

var knockedAngle = 45.0;
var sunkHeight:float = -10.0;

private var pins:Array;

function Start () {
	CreatePins();
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

function Update() {
	if (ball.transform.position.y<sunkHeight) {
		ResetEverything();
	}
}

function ResetBall() {
	ball.SendMessage("ResetPosition");
}

function ResetPins() {
	for (var pin:GameObject in pins) {
		pin.BroadcastMessage("ResetPosition");
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

