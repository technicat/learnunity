/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

/* UV animation */

#pragma strict

var speed:Vector2;
var materialIndex:int=0;

var shared:boolean = true;

private var offset:Vector2;
private var material:Material;

function Start() {
	offset=new Vector2(0,0);
	if (shared) {
		material = renderer.sharedMaterials[materialIndex];
	} else {
		material = renderer.materials[materialIndex];
	}
}

function Update () {
	var dtime:float = Time.deltaTime;
	offset.x=(offset.x+speed.x*dtime)%1.0f;
	offset.y=(offset.y+speed.y*dtime)%1.0f;
	material.SetTextureOffset("_MainTex",offset);
}