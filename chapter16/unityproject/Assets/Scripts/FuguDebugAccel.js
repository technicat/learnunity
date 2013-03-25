#pragma strict

function Update () {
	var accel:Vector3 = Input.acceleration;
	Debug.Log("accel x: "+accel.x+" y: "+accel.y+" z: "+accel.z);
}