#pragma strict

var minSpeed:float = 1.0; // actually the square of the minSpeed

function OnCollisionStay(collider:Collision) {
	if (collider.gameObject.tag == "Floor") {
		if (rigidbody.velocity.sqrMagnitude>minSpeed) {
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
	if (collider.gameObject.tag == "Floor") {
		if (audio.isPlaying) {
			audio.Stop();
		}
	}
}
