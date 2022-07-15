/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/


#pragma strict

function Update()
{
	if (Time.deltaTime>0) {
		var fps:float = Time.timeScale/Time.deltaTime;
		GetComponent.<GUIText>().text  = fps.ToString("f0")+"FPS";
	}
}
 