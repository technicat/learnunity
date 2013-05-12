/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/
#pragma strict

#if !UNITY_IPHONE
function OnMouseDown () {
#else
function OnTap () {
#endif
	Debug.Log("GameObject "+ gameObject.name + " was touched");
}

