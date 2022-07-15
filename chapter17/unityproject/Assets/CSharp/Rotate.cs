using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {
public class Rotate : MonoBehaviour {

	public float speed = 10.0f; // controls how fast we rotate

private Transform trans = null;

void Start () {
	trans = transform;
}

void Update () {
	trans.Rotate(Vector3.up * speed * Time.deltaTime);
}
}
}