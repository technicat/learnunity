/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// bowling ball rolling sound

#pragma strict

var minSpeed:float = 1.0; // actually the square of the minSpeed
private var sqrMinSpeed:float = 1.0;
private var floorTag = "Floor";

function Awake() {
	sqrMinSpeed = minSpeed * minSpeed;
}

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		if (GetComponent.<Rigidbody>().velocity.sqrMagnitude>sqrMinSpeed) {
			if (!GetComponent.<AudioSource>().isPlaying) {
				GetComponent.<AudioSource>().Play();
			}
		} else {
			if (GetComponent.<AudioSource>().isPlaying) {
				GetComponent.<AudioSource>().Stop();
			}
		}	
	}
}

function OnCollisionExit(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		if (GetComponent.<AudioSource>().isPlaying) {
			GetComponent.<AudioSource>().Stop();
		}
	}
}
