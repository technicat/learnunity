/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

public class PinStatus : MonoBehaviour {

	public float knockedAngle = 45.0f;

	private Vector3 initialAngles;

	void Start () {
		initialAngles = transform.localEulerAngles;
	}

	public bool IsKnockedOver() {
		return Mathf.Abs(transform.localEulerAngles.x-initialAngles.x)>knockedAngle || 
				Mathf.Abs(transform.localEulerAngles.z-initialAngles.z)>knockedAngle;
	}	
}

}
