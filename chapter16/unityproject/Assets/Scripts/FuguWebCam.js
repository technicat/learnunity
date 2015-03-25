/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

function Start () {
	var webcamTexture:WebCamTexture = WebCamTexture();
	GetComponent.<Renderer>().material.mainTexture = webcamTexture;
	webcamTexture.Play();
}
