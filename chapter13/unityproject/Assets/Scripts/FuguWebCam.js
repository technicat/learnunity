/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
#pragma strict

function Start () {
var webcamTexture:WebCamTexture = WebCamTexture();
renderer.material.mainTexture = webcamTexture;
webcamTexture.Play();
}
