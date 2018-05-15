using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

public class PinSound : MonoBehaviour {

	

	public float minSpeed = 0.01f; // actually the square of the minSpeed

void OnCollisionEnter(Collision collider) {
	if (collider.relativeVelocity.sqrMagnitude > minSpeed) {
		if (collider.gameObject.tag != "Pin") {
			GetComponent<AudioSource>().Play(); // hit anything besides another pin, play the sound
		} else {
			// otherwise pin with lower ID gets to play
			if (gameObject.GetInstanceID() < collider.gameObject.GetInstanceID()) {
				GetComponent<AudioSource>().Play();
			}
		}
	}
}

}

}