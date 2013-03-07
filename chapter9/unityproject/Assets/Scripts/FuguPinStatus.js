#pragma strict

var knockedAngle:float = 45.0;

private var initialAngles:Vector3;

function Start () {
	initialAngles = transform.localEulerAngles;
}

function IsKnockedOver() {
	return Mathf.Abs(transform.localEulerAngles.x-initialAngles.x)>knockedAngle || 
			Mathf.Abs(transform.localEulerAngles.z-initialAngles.z)>knockedAngle;
}
