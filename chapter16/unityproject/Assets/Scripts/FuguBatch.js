/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

// batch GameObject hierarchy that moves together

#pragma strict

#if UNITY_PRO
function Start () {
	StaticBatchingUtility.Combine(gameObject);
}
#endif