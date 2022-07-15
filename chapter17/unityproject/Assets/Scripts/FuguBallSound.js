/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

// bowling ball rolling sound

#pragma strict

var minSpeed:float = 1.0;

private var sqrMinSpeed: float = 0; // the square of the minSpeed

private var body:Rigidbody = null; // cached Rigidbody Component
private var audiosrc:AudioSource; // cached AudioSource Component

private var floorTag = "Floor";

function Awake() {
	body = GetComponent.<Rigidbody>();
	audiosrc = GetComponent.<AudioSource>();
	sqrMinSpeed = minSpeed*minSpeed;
}

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		if (body.velocity.sqrMagnitude>minSpeed) {
			if (!audiosrc.isPlaying) {
				audiosrc.Play();
			}
		} else {
			if (audiosrc.isPlaying) {
				audiosrc.Stop();
			}
		}	
	}
}

function OnCollisionExit(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		if (audiosrc.isPlaying) {
			audiosrc.Stop();
		}
	}
}
