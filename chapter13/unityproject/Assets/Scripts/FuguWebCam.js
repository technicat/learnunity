#pragma strict

function Start () {
var webcamTexture:WebCamTexture = WebCamTexture();
renderer.material.mainTexture = webcamTexture;
webcamTexture.Play();
}
