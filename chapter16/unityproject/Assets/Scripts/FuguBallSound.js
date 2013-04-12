/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

// bowling ball rolling sound

#pragma strict

var minSpeed:float = 1.0; // actually the square of the minSpeed

private var sqrMinSpeed: float = 0;

private var body:Rigidbody = null;
private var audiosrc:AudioSource;

function Awake() {
	body = rigidbody;
	audiosrc = audio;
	sqrMinSpeed = minSpeed*minSpeed;
}

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == "Floor") {
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
	if (collider.gameObject.tag == "Floor") {
		if (audiosrc.isPlaying) {
			audiosrc.Stop();
		}
	}
}
