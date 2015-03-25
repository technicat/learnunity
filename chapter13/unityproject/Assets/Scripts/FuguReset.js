/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// restore GameObject to its original position and rotation

#pragma strict

private var startPos:Vector3;
private var startRot:Vector3;

function Awake() {
	// save the initial position and rotation of this GameObject
	startPos = transform.localPosition;
	startRot = transform.localEulerAngles;
}

function ResetPosition() {
	// set back to initial position
	transform.localPosition = startPos;
	transform.localEulerAngles = startRot;
	// make sure we stop all physics movement
	if (GetComponent.<Rigidbody>() != null) {
		GetComponent.<Rigidbody>().velocity = Vector3.zero;
		GetComponent.<Rigidbody>().angularVelocity = Vector3.zero;
	}
}
