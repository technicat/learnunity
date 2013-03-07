// this script provides a ResetPosition function that restores a GameObject to its initial position and rotation

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
	if (rigidbody != null) {
		rigidbody.velocity = Vector3.zero;
		rigidbody.angularVelocity = Vector3.zero;
	}
}
