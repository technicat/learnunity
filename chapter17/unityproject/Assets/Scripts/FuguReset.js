/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// restore GameObject to its original position and rotation

#pragma strict

private var startPos:Vector3;
private var startRot:Vector3;

// for performance
private var trans:Transform = null;
private var body:Rigidbody = null;

function Awake() {
	// cache the Transform reference
	trans = transform;
	body = rigidbody;
	// save the initial position and rotation of this GameObject
	startPos = trans.localPosition;
	startRot = trans.localEulerAngles;
}

function ResetPosition() {
	// set back to initial position
	trans.localPosition = startPos;
	trans.localEulerAngles = startRot;
	// make sure we stop all physics movement
	if (body != null) {
		body.velocity = Vector3.zero;
		body.angularVelocity = Vector3.zero;
	}
}
