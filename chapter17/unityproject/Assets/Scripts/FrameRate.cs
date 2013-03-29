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
