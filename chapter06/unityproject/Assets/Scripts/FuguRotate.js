/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://technicat.com/
*/

// various ways to rotate

#pragma strict

var speed:float = 10.0; // controls how fast we rotate

function Start () {
//	var object:GameObject = this.gameObject;
//	Debug.Log("Start called on GameObject "+object.name);
	//iTween.RotateBy(gameObject, iTween.Hash("y", 1, "time", 2, "easeType", "easeInOutBack", "loopType", "pingPong"));
}

function Update () {
	//Debug.Log("Update called at time "+Time.time);
	transform.Rotate(Vector3.up * speed * Time.deltaTime);
	//transform.Rotate(0,speed*Time.deltaTime,0);
	//transform.Rotate(Vector3(0,speed*Time.deltaTime,0));
	//transform.Rotate(Vector3.up,speed*Time.deltaTime,Space.World);
	//transform.localEulerAngles.y += speed*Time.deltaTime;
}