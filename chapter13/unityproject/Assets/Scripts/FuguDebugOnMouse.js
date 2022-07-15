/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/
#pragma strict

#if !UNITY_IPHONE
function OnMouseDown () {
#else
function OnTap () {
#endif
	Debug.Log("GameObject "+ gameObject.name + " was touched");
}

