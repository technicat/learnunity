#pragma strict

function Start () {
var webcamTexture:WebCamTexture = WebCamTexture();
GetComponent.<Renderer>().material.mainTexture = webcamTexture;
webcamTexture.Play();
}
