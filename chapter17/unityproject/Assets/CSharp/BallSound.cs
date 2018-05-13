/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {}
public class BallSound : MonoBehaviour {

public float minSpeed = 1.0f;

private float sqrMinSpeed = 0.0f; // the square of the minSpeed

private Rigidbody body = null; // cached Rigidbody Component
private AudioSource audiosrc; // cached AudioSource Component

private string floorTag = "Floor";

void Awake() {
	body = GetComponent<Rigidbody>();
	audiosrc = GetComponent<AudioSource>();
	sqrMinSpeed = minSpeed*minSpeed;
}

void OnCollisionStay(Collision collider) {
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

void OnCollisionExit(Collision collider) {
	if (collider.gameObject.tag == floorTag) {
		if (audiosrc.isPlaying) {
			audiosrc.Stop();
		}
	}
}

}