#pragma strict

function Start () {

}

function Update () {
	Debug.Log("accel x: "+Input.acceleration.x+" y: "+Input.acceleration.y+" z: "+Input.acceleration.z);
}