/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// HyperBowl-style bowling ball control

#pragma strict

var mousepowerx:float = 1.0;
var mousepowery:float = 1.0;

var swipepowerx:float = 0.1;
var swipepowery:float = 0.1;

var maxVelocitySquared:float=400.0;

private var forcey:float=0;
private var forcex:float=0;

private var isRolling:boolean=false;

private var floorTag = "Floor";

function Update() {
	forcex = 0;
	forcey = 0;
	if (Time.deltaTime > 0) {
		CalcForce();
	}
}

function CalcForce() {
	var deltatime:float = Time.deltaTime;
#if UNITY_IPHONE
	if (Input.touchCount > 0) {
		// Get movement of the finger since last frame
		var touch:Touch = Input.GetTouch(0);
		if (touch.phase == TouchPhase.Moved) {
			var touchPositionDelta:Vector2 = touch.deltaPosition;
			forcey = swipepowery*touchPositionDelta.y/deltatime;
			forcex = swipepowerx*touchPositionDelta.x/deltatime;
		}
	}
#else
	forcey = mousepowery*Input.GetAxis("Mouse Y")/deltatime;
	forcex = mousepowerx*Input.GetAxis("Mouse X")/deltatime;
#endif
}


function FixedUpdate() {
	if (isRolling && GetComponent.<Rigidbody>().velocity.sqrMagnitude<maxVelocitySquared) {
		GetComponent.<Rigidbody>().AddForce(forcex,0,forcey);
	}
}

function OnCollisionEnter(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = true;
	}
}

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = true;
	}	
}

function OnCollisionExit(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = false;
	}
}

