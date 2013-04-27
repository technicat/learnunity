/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

#pragma strict

function Update()
{
	if (Time.deltaTime>0) {
		var fps:float = Time.timeScale/Time.deltaTime;
		guiText.text  = fps.ToString("f0")+"FPS";
	}
}
 