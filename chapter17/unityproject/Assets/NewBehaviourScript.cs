using UnityEngine;
using System.Collections;

public class NewBehaviourScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		//transform.position.x=0;
		transform.position = new Vector3(0,transform.position.y,transform.position.z);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
