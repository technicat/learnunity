/* Copyright (c) 2007 Technicat, LLC */

#pragma strict

var mousepowerx:float = 30.0;
var mousepowery:float = 40.0;

var swipepowerx:float = 0.1;
var swipepowery:float = 0.1;

private var body:Rigidbody;

private var powery:Vector3;
private var powerx:Vector3;
private var forcey:Vector3;
private var forcex:Vector3;

private var isRolling:boolean;

private var maxvelocity:float=400.0;

function Start () {
	body = rigidbody;
	isRolling = true;
}

function OnCollisionStay(collider:Collision) {
	isRolling = true;
}

function OnCollisionExit(collider:Collision) {
	isRolling = false;
}

function OnCollisionEnter(collider:Collision) {
	isRolling = true;
}

function OnEnable() {
	forcey = Vector3.zero;
	forcex = Vector3.zero;
	isRolling = true; // in case it's resting
	InitForce();
}

function Update() {
	if (Time.deltaTime > 0) {
		CalcForce();
	} else {
		forcey = Vector3.zero;
		forcex = Vector3.zero;
	}
}

// not called if Time.deltaTime == 0
function FixedUpdate() {
	if (isRolling && rigidbody.velocity.sqrMagnitude<maxvelocity) {
		ApplyForce();	
	}
}


function InitForce() {
#if !UNITY_IPHONE
	powery = Vector3.forward*mousepowery;
	powerx = Vector3.right*mousepowerx;
#endif
#if UNITY_IPHONE
	powery = Vector3.forward*swipepowery;
	powerx = Vector3.right*swipepowerx;
#endif
}

function CalcForce() {
	var deltatime:float = Time.deltaTime;
#if UNITY_IPHONE
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
		// Get movement of the finger since last frame
		var touchPositionDelta:Vector2 = Input.GetTouch(0).deltaPosition;
		forcey = powery*touchPositionDelta.y/deltatime;
		forcex = powerx*touchPositionDelta.x/deltatime;
	} else {
		forcey = Vector3.zero;
		forcex = Vector3.zero;
	}
#else
	forcey = powery*Input.GetAxis("Mouse Y")/deltatime;
	forcex = powerx*Input.GetAxis("Mouse X")/deltatime;
#endif
}

function ApplyForce () {
	body.AddForce (forcey);
	body.AddForce (forcex);
}


