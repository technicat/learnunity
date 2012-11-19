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
	InitForce();
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

/*
function OnEnable() {
	forcey = Vector3.zero;
	forcex = Vector3.zero;
	isRolling = true; // in case it's resting
} */

function Update() {
	forcex = Vector3.zero;
	forcey = Vector3.zero;
	if (Time.deltaTime > 0) {
		CalcForce();
	}
}

// not called if Time.deltaTime == 0
function FixedUpdate() {
	if (isRolling && rigidbody.velocity.sqrMagnitude<maxvelocity) {
		ApplyForce();	
	}
}


function InitForce() {
#if UNITY_IPHONE
	powery = Vector3.forward*swipepowery;
	powerx = Vector3.right*swipepowerx;
#else
	powery = Vector3.forward*mousepowery;
	powerx = Vector3.right*mousepowerx;
#endif
}

function CalcForce() {
	var deltatime:float = Time.deltaTime;
#if UNITY_IPHONE
	if (Input.touchCount > 0) {
		// Get movement of the finger since last frame
		var touch:Touch = Input.GetTouch(0);
		if (touch.phase == TouchPhase.Moved) {
			var touchPositionDelta:Vector2 = touch.deltaPosition;
			forcey = powery*touchPositionDelta.y/deltatime;
			forcex = powerx*touchPositionDelta.x/deltatime;
		}
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


