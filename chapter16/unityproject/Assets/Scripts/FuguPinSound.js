/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// bowling pin collision sounds

#pragma strict

var minSpeed = 0.01; // actually the square of the minSpeed

function OnCollisionEnter(collider:Collision) {
	if (collider.relativeVelocity.sqrMagnitude > minSpeed) {
		if (collider.gameObject.tag != "Pin") {
			audio.Play(); // hit anything besides another pin, play the sound
		} else {
			// otherwise pin with lower ID gets to play
			if (gameObject.GetInstanceID() < collider.gameObject.GetInstanceID()) {
				audio.Play();
			}
		}
	}
}
