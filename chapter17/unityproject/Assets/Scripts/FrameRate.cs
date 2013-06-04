/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://learnunity4.com/
*/

using UnityEngine;
using System.Collections;

namespace Fugu {
	
sealed public class FrameRate : MonoBehaviour {
		
	public int frameRate = 60;

	void Awake () {
		Application.targetFrameRate = frameRate;
	}
	
}
	
} // end namespace
