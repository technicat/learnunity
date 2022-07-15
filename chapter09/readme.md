# The Game GUI

## Explore Further

Finally, the scoreboard display makes our bowling game a fully functional bowling game, and the addition of a start/pause menu provides some of the polish that players expect!

The addition of the game GUI not only completes the bowling game (in a commercial game project, this might be considered a “first playable” milestone) but it also marks the end of our introduction to Unity’s basic features typically used in a 3D game.

Tip: Although I left the GUI development to the end of this phase, which is unfortunately common in game development, it’s best to include GUI design early in the project. Even just sketching out the menus will help clarify the anticipated game modes and options.

For the most part, although you’ve been modifying and testing the game solely in the Editor, these are cross-platform features. Right now, you could build this game as a web player or a Mac or Windows executable, and the game would run the same on all platforms, performance differences aside. But the ultimate goal of this book is to get you into iOS development, so, starting with the next chapter, the remainder of this book will be all about Unity iOS.

### Unity Manual

The Game Interface Elements link in the Creating Gameplay section of the Unity Manual leads to the “Unity Scripting Guide,” which is a tutorial-style sequence of pages that goes through the UnityGUI system, from creating a single button to adding various other UnityGUI Controls such as sliders and radio buttons, use of automatic layout vs. fixed layout, creating reusable compound Controls, and customizing the GUI appearance with styles and skins.

The “Unity Scripting Guide” also explains how you can customize the Unity Editor using UnityGUI. It turns out the Editor interface is actually implemented with UnityGUI (which explains why on occasion you may see an OnGUI error message in the Console View that is not related to any of your code)!

### Reference Manual

I briefly mentioned how additional fonts besides the built-in Unity font can be imported into a Unity project and then assigned to UnityGUI styles and skins. The Reference Manual has a page in its Asset Components section describing the Font asset and its import options in more detail.

### Scripting Reference

Naturally, the Runtime Classes list in the Scripting Reference includes pages describing the UnityGUI functions you’ve used, starting with the OnGUI callback defined in the MonoBehaviour class.

Most of the UnityGUI functions used in both the scoreboard and pause menu are the static GUI and GUILayout functions used to create the various UnityGUI Controls, such as GUI.Button and GUI.Label. It’s worth going through the Scripting Reference pages for each of them so you know what GUI Controls are available, along with customization variables like GUI.color and GUI.skin (and there are others, e.g., to customize the background color). GUIStyle and GUISkin are classes too, and you can change their properties any time in a script.

Besides the UnityGUI classes, a few others are used in the pause menu. The static variable Time.timeScale was set to pause and unpause the game, Application.Quit called to exit the game, and the AudioListener, QualitySettings, and SystemInfo classes accessed in the Options page.

### Asset Store

The Necromancer GUI looked great in the pause menu, demonstrating how nice UnityGUI can look with a well-crafted GUISkin, but there are many others on the Asset Store. They're all listed, along with the Necromancer GUI, in the GUI Skins category under “Textures and Materials.” That category is well populated with skins for UnityGUI and also skins for third-party GUI systems, such as the popular EZGUI from [Above and Beyond Software](http://anbsoft.com/) and NGUI from [Tasharen Entertainment](http://tasharen.com).

Those third-party GUI systems are available under the Scripting category, in the well-populated GUI subcategory, which is filled with pre-scripted GUIs such as minimaps and menus. In fact, a version of the pause menu implemented in this chapter is on the Asset Store in the Complete Projects section (under the name FuguPause).

The Asset Store also has a decent assortment of fonts listed under the Fonts category of “Textures and Materials.” But since Unity can import TrueType and OpenType fonts, a plethora of free font sites on the web is available to you, along with moderately priced font libraries (I use the MacXWare Font Library).