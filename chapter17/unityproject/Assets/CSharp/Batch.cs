/*
Copyright (c) 2013 Technicat, LLC. All Rights Reserved. MIT License.
http://github.com/technicat/LearnUnity
*/

using UnityEngine;

// batch GameObject hierarchy that moves together

namespace Fugu {

	class Batch : MonoBehaviour {

		void Start () {
			StaticBatchingUtility.Combine(gameObject);
		}

	}

}
