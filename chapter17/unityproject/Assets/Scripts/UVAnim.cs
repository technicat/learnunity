/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
using UnityEngine;
using System.Collections;

namespace Fugu {
	
sealed public class UVAnim : MonoBehaviour {
	public Vector2 speed;
	public int materialIndex=0;
	public bool shared = true;

	private Vector2 offset;
	private Material material;
	// Use this for initialization
	void Start () {
		offset=new Vector2(0,0);
		if (shared) {
			material = renderer.sharedMaterials[materialIndex];
		} else {
			material = renderer.materials[materialIndex];
		}
	}
	
	// Update is called once per frame
	void Update () {
		float dtime = Time.deltaTime;
		offset.x=(offset.x+speed.x*dtime)%1.0f;
		offset.y=(offset.y+speed.y*dtime)%1.0f;
		material.SetTextureOffset("_MainTex",offset);
	}
}
}