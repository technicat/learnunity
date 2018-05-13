/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Fugu {

	public class FPS : MonoBehaviour {
	
	// Update is called once per frame
		void Update () {
			if (Time.deltaTime>0) {
				float fps = Time.timeScale/Time.deltaTime;
				GetComponent<GUIText>().text  = fps.ToString("f0")+"FPS";
		}
	}

	} // class

} // namespace