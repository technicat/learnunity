/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// HyperBowl-style bowling ball control

#pragma strict

var mousepowerx:float = 1.0;
var mousepowery:float = 1.0;

var maxVelocitySquared:float=400.0;

private var forcey:float=0;
private var forcex:float=0;

private var isRolling:boolean=false;

private var floorTag:String = "Floor";

function Update() {
	forcex = 0;
	forcey = 0;
	if (Time.deltaTime > 0) {
		CalcForce();
	}
}

function CalcForce() {
	var deltaTime:float = Time.deltaTime;
	forcex = mousepowerx*Input.GetAxis("Mouse X")/deltaTime;
	forcey = mousepowery*Input.GetAxis("Mouse Y")/deltaTime;
}

function FixedUpdate() {
	if (isRolling && rigidbody.velocity.sqrMagnitude<maxVelocitySquared) {
		rigidbody.AddForce(forcex,0,forcey);
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

