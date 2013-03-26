

#pragma strict

function Update()
{
	if (Time.deltaTime>0) {
		var fps:float = Time.timeScale/Time.deltaTime;
		guiText.text  = fps.ToString("f0")+"FPS";
	}
}
 