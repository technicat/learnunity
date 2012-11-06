/* Copyright (c) 2007 Technicat, LLC */
#pragma strict

var power:float = 40.0;
var powerx:float = 30.0;
var delay:float = 2.0;

function FixedUpdate () {
	var force:Vector3 = new Vector3(powerx*Input.GetAxis("Mouse X"),
					0,
					power*Input.GetAxis("Mouse Y")
				       );
	gameObject.rigidbody.AddForce(force);
}

