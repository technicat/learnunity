/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

#if UNITY_IPHONE
function Update () {
		for (var i = 0; i < Input.touchCount; ++i) {
			if (Input.GetTouch(i).phase == TouchPhase.Began) {
				var ray:Ray = GetComponent.<Camera>().ScreenPointToRay (Input.GetTouch(i).position);
				var hit:RaycastHit;
				if (Physics.Raycast (ray,hit,GetComponent.<Camera>().farClipPlane,GetComponent.<Camera>().cullingMask)) {
					hit.collider.SendMessage("OnTap",SendMessageOptions.DontRequireReceiver);
				}
			}
		}
}
#endif