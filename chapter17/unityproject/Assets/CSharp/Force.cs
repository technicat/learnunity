using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

public class Force : MonoBehaviour {

	public float mousepowerx = 1.0f;
	public float mousepowery = 1.0f;

	public float swipepowerx = 0.1f;

	public float swipepowery = 0.1f;

	public float maxVelocity=400.0f;

	private float forcey=0;
	private float forcex=0;

	private bool isRolling=false;

	private Rigidbody body = null;

	private string floorTag = "Floor";

	void Awake() {
		body = GetComponent<Rigidbody>();
	}

void Update() {
	forcex = 0;
	forcey = 0;
	if (Time.deltaTime > 0) {
		CalcForce();
	}
}

void CalcForce() {
	float deltatime = Time.deltaTime;
#if UNITY_IPHONE || UNITY_ANDROID
	if (Input.touchCount > 0) {
		// Get movement of the finger since last frame
		Touch touch = Input.GetTouch(0);
		if (touch.phase == TouchPhase.Moved) {
			Vector2 touchPositionDelta = touch.deltaPosition;
			forcey = swipepowery*touchPositionDelta.y/deltatime;
			forcex = swipepowerx*touchPositionDelta.x/deltatime;
		}
	}
#else
	forcey = mousepowery*Input.GetAxis("Mouse Y")/deltatime;
	forcex = mousepowerx*Input.GetAxis("Mouse X")/deltatime;
#endif
}


void FixedUpdate() {
	if (isRolling && body.velocity.sqrMagnitude<maxVelocity) {
		body.AddForce(forcex,0,forcey);
	}
}

void OnCollisionEnter(Collision collider) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = true;
	}
}

void OnCollisionStay(Collision collider) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = true;
	}	
}

void OnCollisionExit(Collision collider) {
	if (collider.gameObject.tag == floorTag) {
		isRolling = false;
	}
}
}
}