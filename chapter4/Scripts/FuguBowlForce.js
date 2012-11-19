/* Copyright (c) 2007 Technicat, LLC */

#pragma strict

var mousepowerx:float = 30.0;
var mousepowery:float = 40.0;

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
	powery = Vector3.forward*mousepowery;
	powerx = Vector3.right*mousepowerx;
}

function CalcForce() {
	var deltatime:float = Time.deltaTime;
	forcey = powery*Input.GetAxis("Mouse Y")/deltatime;
	forcex = powerx*Input.GetAxis("Mouse X")/deltatime;
}

function ApplyForce () {
	body.AddForce (forcey);
	body.AddForce (forcex);
}


