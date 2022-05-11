# Device Input

## Explore Further

All in all, it didn't take much work (compared to the packaging effort in the previous chapter) to implement touchscreen input for the bowling game, although in practice you'll spend a lot of time testing and adjusting controls for a game to get it just right. In any case, with the shake-to-pause feature, the functional port of the bowling game is complete. In other words, the iOS version game is now playable!

And despite the fact there isn’t a real use for the device camera in this game, we did activate it using Unity’s WebCamTexture class to render a video texture on the bowling ball. Gimmicky, but game development is very much about learning! Especially in iOS, there's an opportunity to play around with a lot of different control schemes and input sensors.

### Scripting Reference

Almost all the Unity features introduced in this chapter are members of the Input class. In fact, the Scripting Reference documentation on Input includes an overview of the iOS input features.

 After reading the overview of the Input class, you should read the pages for each of the functions used in this chapter, in particular Input.GetTouch (and the associated Touch struct), which has code samples showing how to loop through all the Touch events in each frame, and Input.acceleration, which has code samples showing how to check acceleration values in every frame.

One thing to keep in mind, the accelerometer can generate multiple values per frame. For most cases, it should be sufficient to just sample Input.accelerometer once per frame, but if finer-grained sampling is required, you can access the variables Input.accelerationEventCount and Input.accelerationEvents to obtain all acceleration events.

The Input class provides access to other iOS sensors. The static variables Input.gyro, Input.compass and Input.location return data from the gyroscope, compass and location services, respectively. In addition to the pages documenting those variables, you should check out the pages on the classes of those variables: Gyroscope, Compass and LocationServices classes. The documentation is sparse, but you can find code samples in the individual class functions. The static variable Input.compensateSensors controls whether the accelerometer, gyroscope and compass data are adjusted for the screen orientation.

Besides testing object selection, raycasting is used a lot in games and graphics, so you should familiarize yourself with the page on Physics.Raycast, which has several code examples. For example, in HyperBowl, I use raycasting to keep the Main Camera from dipping below the ground and to set the initial positions of GameObjects to rest just on top of the ground. In both cases, I raycast down from the GameObject position toward the ground and check the resulting distance.Finally, we covered the use of the WebCamTexture class. The page on WebCamTexture has a lot of stuff, but click the links to its Play, Stop, and Pause functions (the functions you’d most commonly use) to find code samples on each of those pages. Also check out the link to the WebCamTexture constructor. That page lists a variety of constructors that allow you to customize the texture size for different resolutions.

### iOS Developer Library

It’s a good idea to read the iOS Reference Library in addition to, or even before, reading the Unity Script Reference, so you’ll know what iOS capabilities are available to be exposed through Unity and how Unity classes and functions map to their iOS counterparts.

You can view the iOS Reference Library, no login required, at http://developer.apple.com/library or from the Xcode Organizer, and from there select the Guides tab and browse the guides, in particular the following:

- The “Event Handling Guide” provides an overview of touch events, which relate to Unity’s Input.GetTouch and the Touch class, and motion events, which relate to Input.acceleration and the other Input accelerometer variables.

- The guide “Camera Programming Topics for iOS” describes the UIImagePickerController class used by the Prime31 Etcetera plug-ins.

- The “AV Foundation Programming Guide” describes the video capture functions most likely used for the WebCamTexture class in Unity.

### Asset Store

The Unity Input class gives us access to basic touch information, but it doesn’t provide access to the iOS Gesture Recognizers, which detect higher level “gestures,” such as swiping and pinching. The Asset Store comes to the rescue again, offering third-party packages that provide high-level gesture detection. I use the Finger Gestures package, which has a nice callback system for detecting and handling various gestures.

For example, in HyperBowl I wanted the pause menu to come up when the player pinches the screen (two fingers on the screen coming together). With the Finger Gestures package, it just involves adding a callback for the gesture in the pause menu script:

`function OnGesturePinchEnd(pos1:Vector2,pos2:Vector2) {
	PauseGame();
}`

and then a line in the Start or Awake function that adds the callback to the FingerGestures callback list for that gesture:

`FingerGestures.OnPinchEnd += OnGesturePinchEnd;`

Unity doesn’t provide script access to everything available in iOS, and that’s where plugins come in. The Unity plugin system allows you to add new script functions that access “native” code. So, generally speaking, if you can code something in C, C++, or Objective-C, you can make a Unity plugin for it. For example, in the Unity Asset Store, you’ll find there are plug-ins built around mobile ad SDKs and plugins for accessing iOS features.

Plugins are installed in the Assets/Plugins folder, which, as we mentioned before, is a good place to store scripts that have to be loaded before any other scripts. They also often require manual integration steps in Xcode, like adding entries to the Info.plist file or installing additional code libraries (preventing Build and Run from Unity—you have to Build, modify the Xcode project, then Run from Xcode). And then there’s always the risk that multiple plugins installed in the same Unity project will have conflicts.

That’s why I like to use the plug-ins provided by Prime31 Studios at http://prime31.com/unity. They provide a large variety of plugins that can coexist in the same Unity project, and all Xcode modifications are performed by a Unity postprocessor script, so Build and Run from Unity will still work and no messing around in Xcode is required.

For example, the Prime31 Etcetera plugin, available on the Asset Store, has a bunch of assorted features, including access to the iOS Photos gallery and the device camera, with one function call, like this:

`EtceteraBinding.promptForPhoto(1.0);`

The screenshot in Figure 13-8 shows the resulting prompt in my Fugu Maze app (where I use the photo chooser to allow players to customize the maze wall texture). If you want to try it out, download Fugu Maze Free from the App Store or one of the free HyperBowl lanes (I use the photo chooser to customize the bowling ball texture).

Figure 13-8. The Prime31 Etcetera plug-in photo chooser on an iPad

Another Prime31 plugin that makes available additional device input is the iCade plugin (only available on the Prime31 web site). The iCade is a retro-style arcade cabinet that provides joystick input to iOS devices through a Bluetooth connection. The iCade essentially pretends it’s a Bluetooth keyboard, so any code using the iCade plugin is similar to the code for keyboard controls. If we added code for iCade controls to the CalcForce function of our bowling ball code, it would look something like the snippet in Listing 13-10 (this sample is actually taken from HyperBowl).

Listing 13-10. iCade Additions to CalcForce Using the Prime31 iCade Plug-In

	var yinput:float = 0;
	if (iCadeBinding.state.JoystickUp) yinput = 1;
	if (iCadeBinding.state.JoystickDown) yinput = -1;
	var xinput:float = 0;
	if (iCadeBinding.state.JoystickLeft) xinput = 1;
	if (iCadeBinding.state.JoystickRight) xinput = -1;
	var deltatime:float = Time.deltaTime;
	forcey += iCadePowery*yinput/deltatime;
	forcex += iCadePowerx*xinput/deltatime;


Just as if we’re checking if four different keys were pressed, we’re checking if the joystick is moved in any of four directions. The joysticks aren’t any more sensitive than that.
