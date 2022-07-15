using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {
public class Reset : MonoBehaviour {

	private Vector3 startPos;
private Vector3 startRot;

// for performance
private Transform trans = null;
private Rigidbody body = null;

void Awake() {
	// cache the Transform reference
	trans = transform;
	body = GetComponent<Rigidbody>();
	// save the initial position and rotation of this GameObject
	startPos = trans.localPosition;
	startRot = trans.localEulerAngles;
}

void ResetPosition() {
	// set back to initial position
	trans.localPosition = startPos;
	trans.localEulerAngles = startRot;
	// make sure we stop all physics movement
	if (body != null) {
		body.velocity = Vector3.zero;
		body.angularVelocity = Vector3.zero;
	}
}
}

}