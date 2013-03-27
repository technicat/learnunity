using UnityEngine;
using System.Collections;

namespace Fugu {

public class AdBanner : MonoBehaviour {
		
	public bool showOnTop = true;
	public bool dontDestroy = true;
		
	private ADBannerView banner = null;
		
	void Start() {
		StartCoroutine (StartBanner());
	}
		
	private IEnumerator StartBanner () {
		if (dontDestroy) {
				GameObject.DontDestroyOnLoad(gameObject); // keep ad alive if we load a new scene
		}
		banner = new ADBannerView();
		banner.autoSize = true;
		banner.autoPosition = showOnTop ? ADPosition.Top : ADPosition.Bottom;
		while (!banner.loaded && banner.error == null) {
			yield return null;
		}
		if (banner.error == null) {
			banner.Show();
		} else {
			banner = null;
		}
	}
}
	
} // end namespace
