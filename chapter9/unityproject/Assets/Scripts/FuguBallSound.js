/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
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
		if (rigidbody.velocity.sqrMagnitude>sqrMinSpeed) {
			if (!audio.isPlaying) {
				audio.Play();
			}
		} else {
			if (audio.isPlaying) {
				audio.Stop();
			}
		}	
	}
}

function OnCollisionExit(collider:Collision) {
	if (collider.gameObject.tag == floorTag) {
		if (audio.isPlaying) {
			audio.Stop();
		}
	}
}
