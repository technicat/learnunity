/* Copyright (c) 2012 Technicat, LLC */

#pragma strict

@MenuItem ("FuguGames/ActivateRecursively")
static function ActivateRecursively() {
	if (Selection.activeGameObject !=null) {
		SetActiveRecursively(Selection.activeGameObject,true);
	}
}

@MenuItem ("FuguGames/DeactivateRecursively")
static function DeactivateRecursively() {
	if (Selection.activeGameObject !=null) {
		SetActiveRecursively(Selection.activeGameObject,false);
	}
}

static function SetActiveRecursively(obj:GameObject,val:boolean) {
		obj.SetActive(val);
		for (var i:int=0; i<obj.transform.GetChildCount(); ++i) {
				SetActiveRecursively(obj.transform.GetChild(i).gameObject,val);
		}
			
}

@MenuItem ("FuguGames/ActivateRecursively", true)
@MenuItem ("FuguGames/DeactivateRecursively", true)
static function ValidateGameObject() {
	return (Selection.activeGameObject !=null);
}

