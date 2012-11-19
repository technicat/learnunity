#pragma strict

var speed:float = 10.0;

// rotate around the object's y axis
function Update () {
	transform.Rotate(Vector3.up * speed * Time.deltaTime);
}