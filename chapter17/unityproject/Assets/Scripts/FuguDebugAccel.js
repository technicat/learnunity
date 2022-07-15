/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

function Update () {
	var accel:Vector3 = Input.acceleration;
	Debug.Log("accel x: "+accel.x+" y: "+accel.y+" z: "+accel.z);
}