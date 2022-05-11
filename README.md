This is the GitHub page for the book Learn Unity 4 for iOS Game Development. It includes the Unity projects for each chapter, and the accompanying Learn Unity bowling game [app](http://technicat.itch.io/learnunity).

The Apress contract allows author publication of some excerpts, so I've included the preface and the Explore Further sections at the end of each chapter (slighty updated with link fixes and removal of some obsolete info, like referral to my social media feeds).

Javascript/Unityscript is no longer supported by Unity, but chapter 17 has been converted to C# and minimally updated to work with the latest version of Unity (2022.3.1).

There is an updated version of the book for Unity 2017. I am listed as a co-author, and I believe it's primarily the same material with some examples updated and some sections removed, but I was not involved in that edition.

# The Book

Learn Unity 4 for iOS Game Development is available on:

* [Amazon](http://www.amazon.com/Learn-Unity-iOS-Game-Development/dp/1430248750) (print and kindle book)
* [Apress](http://www.apress.com/9781430248750) (print, pdf, epub and mobi) Alpha purchasers should download  the latest, final
* [Barnes and Noble](https://www.barnesandnoble.com/w/learn-unity-4-for-ios-game-development-philip-chu/1113931582?ean=9781430248767) (nook book)
* [Goodreads](http://www.goodreads.com/book/show/17063557-learn-unity-4-for-ios-game-development) (links to online bookstores)
* [Google Books](http://books.google.com/books?id=TsC_MgEACAAJ) (links to online bookstores)
* [iBookstore](
https://itunes.apple.com/us/book/learn-unity-4-for-ios-game/id670921450?mt=11) (iBook)
* [Indigo](http://www.chapters.indigo.ca/books/item/1430248750-item.html?s_campaign=aff-001-1944216-Goodreads%2C+Inc-ProductCatalog-10408997-2227948) (Canada) and [Kobo](http://store.kobobooks.com/en-us/books/Learn-Unity-4-for-iOS/EpJtoFLYq0WN3aCQLeqGRA)
* [Langton Info](http://www.langtoninfo.com/showitem.aspx?isbn=1430248750) (UK)
* [Powell's](http://www.powells.com/biblio/61-9781430248750-0)
* [Safari Books](http://my.safaribooksonline.com/book/programming/game-programming/9781430248750) (online subscription)
* [Springer Link](http://link.springer.com/book/10.1007/978-1-4302-4876-7)

This book introduces Unity starting with installation and activation, learning the interface with the included Angry Bots demo, and then builds up successively more elaborate project examples from scratch and using free assets from the Unity Asset Store. A simple spinning cube and dancing skeleton scene is constructed, but most of the book is devoted to building a 3D bowling game with the control style of [HyperBowl](http://hyperbowl.rocks/). The game is first developed and tested in the Unity Editor, incorporating graphics, scripting (with JavaScript), physics, sound, user interface, complete rules for a bowling game, and mouse controls. The game is then adapted to run on iOS with touchscreen and (a little bit of) accelerometer input. Testing with the Unity Remote, iOS Simulator and real devices is explained, Game Center and iAd integration is covered, and then optimization techniques are described. The book concludes with a brief treatment of miscellaneous topics such as C# scripting, Unity Editor scripting, Android development, and tracking and promoting sales.

Some retail descriptions list Unity's Mecanim animation system. The book does mention but does not use Mecanim. Instead, a chapter is devoted to a dancing skeleton example using Unity's Legacy animation system and a free skeleton package on the Asset Store. Also, some retail descriptions list Unity's support for gyroscope on iOS devices. The book does mention but does not use Unity's gyroscope API (Input.gyroscope). The book does describe how to access the touchscreen (Input.touches), accelerometer (Input.accelerometer), and webcam (WebCamTexture).

Technical review was provided by Marc Shårer of [Gayasoft](http://gayasoft.ch).

## Contents, Clarifications, and Corrections

Page numbers correspond to the print version. Links are provided to the online Unity documentation cited in the Explore Further sections.

### About the Author

* page xxi: Snow Crash should be italicized. And that's by Neal Stephenson, by the way (<em>The Diamond Age</em> is also highly recommended).

### Introduction

Explore Further

* [Beginning 3D Game Development with Unity](http://3dadventurous.com)
* [Unity 3.x Game Development Essentials](http://www.packtpub.com/unity-3-x-game-development-essentials)
* [Game Development for iOS with Unity3D](http://www.crcpress.com/product/isbn/9781439892190)

A full list of Unity books is available at [Games from Scratch](http://www.gamefromscratch.com/page/Unity-Book-Roundup.aspx)

### Chapter 1 - Getting Started

Download and install Unity, activate the license, report bugs, get help.

* page 3: "OSX installer package" should read "OS X installer package"
* page 5: "Script Reference" should read "Scripting Reference"
* page 5: "Scripts.unityPackage" is one word
* page 7: Starting with Unity 4.2, he free version of Unity now includes Unity iOS Basic (and Unity Android Basic)
* page 13: "The 3D game engines are very complicated" should read "3D game engines are very complicated"

### Chapter 2 - A Unity Tour

Use the Angry Bots demo to explore the Unity Editor.

* page 25: "go ahead and buildl an OS X app" should read "go ahead and build an OS X app"
* page 58: "Console" and "Console view" should read "Console View" (for consistency, we include "View" in the  view name and capitalize as in the Unity documentation - think "Eiffel Tower" vs. "Eiffel tower")
* page 58: "a script calls a Log.LogError" should read "a script calls Debug.LogError"

* page 58: Starting with Unity 4.1, filtering of Console View messages is controlled by the three buttons at  the top right of the view. Tip: make sure that error messages are not filtered.
* page 60: Starting with Unity 4.2, YAML support (the Force Text option in Editor Settings) is availble in Unity Basic
* page 60: Starting with Unity 4.2, the Editor has integrated Perforce support and an API for supporting other version control systems.

Explore Further
* [Unity Manual](http://docs.unity3d.com/Documentation/Manual/index.html)
 * [Unity Basics](http://docs.unity3d.com/Documentation/Manual/UnityBasics.html)
 * [Learning the Interface](http://docs.unity3d.com/Documentation/Manual/LearningtheInterface.html)

### Chapter 3 - Making a Scene

Create a new Unity scene, add primitive models, textures, lighting, and camera movement. Import assets from Standard Assets, the Unity Asset Store, and the file system. This chapter uses the [Free ArtskillZ Texture Pack 01](https://www.assetstore.unity3d.com/#/content/351) from [ArtskillZ](http://artskillz.net)..

* page 63: "Assets that were installed with Unity in the previous chapter" should read "Assets that were installed with Unity in Chapter 1
* page 67: "Script Reference" should read "Scripting Reference"
* page 109: "Building a Scene" should read "Building Scenes"

Explore Further
* [Unity Manual](http://docs.unity3d.com/Documentation/Manual/index.html)
 * [Creating Scenes](http://docs.unity3d.com/Documentation/Manual/CreatingScenes.html)
 * [Building Scenes](http://docs.unity3d.com/Documentation/Manual/BuildingScenes.html)
 * [Asset Import and Creation](http://docs.unity3d.com/Documentation/Manual/AssetImportandCreation.html)
 * [Creating Gameplay](http://docs.unity3d.com/Documentation/Manual/CreatingGameplay.html)

### Chapter 4 - Making it Move: Scripting the Cube

Create a script (JavaScript), spin the cube, make prefabs, edit and debug scripts with MonoDevelop. Also demonstrate tween animation with [iTween](http://itween.pixelplacement.com) from [Pixel Placement](http://pixelplacement.com).

Explore Further
* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Runtime Classes](http://docs.unity3d.com/Documentation/ScriptReference/20_class_hierarchy.html)

### Chapter 5 - Let's Dance! Animation and Sound

Import a dancing skeleton and music, select and loop the animation and music, add shadows and particle effects. This chapter uses the [Skeletons Pack](https://www.assetstore.unity3d.com/#/content/1818) from [bisaniyehocam](https://www.assetstore.unity3d.com/#/publisher/645)
and [General Music Set](https://www.assetstore.unity3d.com/#/content/2589) from [Gianmarco Leone](http://gianmarcoleone.com/).

* page 164 - Starting with Unity 4.2, dynamic shadows are available in the free version of Unity, but only hard shadows with directional lights, so if you're running Unity free, select Directional for the type of the light and Hard Shadows for the shadow type.

Explore Further

* [Unity Manual](http://docs.unity3d.com/Documentation/Manual/index.html)
 * [Asset Import and Creation](http://docs.unity3d.com/Documentation/Manual/AssetImportandCreation.html)
  * [Audio Files](http://docs.unity3d.com/Documentation/Manual/AudioFiles.html)
 * [Creating Gameplay](http://docs.unity3d.com/Documentation/Manual/CreatingGameplay.html)

* [Asset Store](http://assetstore.unity3d.com/)
 * [Jukebox Free](http://corruptedsmilestudio.blogspot.com/)

### Chapter 6 - Let's Roll! Physics and Controls

Create the beginnings of a bowling game. Make a ball and floor, add colliders and rigidbodies for collision detection and collision reaction, respectively. Uses [Eighteen Free Substances](https://www.assetstore.unity3d.com/#/content/1352) from [Allegorithmic](http://allegorithmic.com).

* page 211 - AddTorque, AddRelativeTorque, AddExplosionForce,  AddForceAtPosition should be formatted like the other function names/pages (i.e., in quotes).


Explore Further
* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [MonoBehaviour](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.html)
 * [MonoBehaviour.OnCollisionEnter](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.OnCollisionEnter.html)
 * [MonoBehaviour.OnCollisionStay](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.OnCollisionStay.html)
 * [MonoBehaviour.OnCollisionExit](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.OnCollisionExit.html)
 * [Rigidbody](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.html)
 * [Rigidbody.AddForce](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddForce.html)
 * [Rigidbody.AddRelativeForce](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddRelativeForce.html)
 * [Rigidbody.AddTorque](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddTorque.html)
 * [Rigidbody.AddRelativeTorque](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddTorque.html)
 * [Rigidbody.AddExplosionForce](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddExplosionForce.html)
 * [Rigidbody.AddForceAtPosition](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddForceAtPosition.html)
 * [Input](http://docs.unity3d.com/Documentation/ScriptReference/Input.html)
 * [Input.GetAxis](http://docs.unity3d.com/Documentation/ScriptReference/Input.GetAxis.html)

### Chapter 7 - Let's Bowl! Advanced Physics

Add bowling pins using primitive models and models from the Asset Store. Construct compound colliders. Add sound effects triggered by collision callbacks. Uses the [Free SFX Package](https://www.assetstore.unity3d.com/#/content/5178) from [Bleep Blop Audio](http://bleepblopaudio.com/)
and [Barrel](https://www.assetstore.unity3d.com/#/content/840) from [Universal Image](http://monstertruckherohd.com/).

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Object.Instantiate](http://docs.unity3d.com/Documentation/ScriptReference/Object.Instantiate.html)
 * [MonoBehaviour.Awake](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.Awake.html)
 * [Rigidbody](http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.html)

### Chapter 8 - Let's Play! Scripting the Game

Implement the bowling game rules with a finite state machine using coroutines.

* page 281: The link to the Blue Mars wiki, "http://create.bluemars.com", should read "http://create.bluemars.com/wiki"

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Coroutines and Yield](http://docs.unity3d.com/Documentation/ScriptReference/index.Coroutines_26_Yield.html)
 * [Coroutine](http://docs.unity3d.com/Documentation/ScriptReference/Coroutine.html)
 * [WaitForSeconds](http://docs.unity3d.com/Documentation/ScriptReference/WaitForSeconds.html)
 * [YieldInstruction](http://docs.unity3d.com/Documentation/ScriptReference/YieldInstruction.html)

### Chapter 9 - The Game GUI

Implement a scoreboard and pause menu with UnityGUI. Demonstrates [Necromancer GUI](https://www.assetstore.unity3d.com/#/content/366) from [Ironbound Studios](http://ironboundstudios.com/).

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [GUILayout](http://docs.unity3d.com/Documentation/ScriptReference/GUILayout.html)
 * [GUI.Button](http://docs.unity3d.com/Documentation/ScriptReference/GUI.Button.html)
 * [GUI.Label](http://docs.unity3d.com/Documentation/ScriptReference/GUI.Label.html)
 * [GUISkin](http://docs.unity3d.com/Documentation/ScriptReference/GUISkin.html)
 * [GUIStyle](http://docs.unity3d.com/Documentation/ScriptReference/GUIStyle.html)
 * [Application.Quit](http://docs.unity3d.com/Documentation/ScriptReference/Application.Quit.html)
 * [AudioListener](http://docs.unity3d.com/Documentation/ScriptReference/AudioListener.html)
 * [QualitySettings](http://docs.unity3d.com/Documentation/ScriptReference/QualitySettings.html)
 * [SystemInfo](http://docs.unity3d.com/Documentation/ScriptReference/SystemInfo.html)
* [Asset Store](http://assetstore.unity3d.com/)
 * [EZGUI](http://anbsoft.com)
 * [NGUI](http://tasharen.com/)

Another one I forgot to mention:
* [GUIKit001](http://gameassets.net)

### Chapter 10 - Using Unity iOS

Return to Angry Bots to get familiar with Unity iOS. Switch the build target to iOS, customize Player Settings, test in the Editor with Unity Remote, build to Xcode and test in the iOS Simulator.

Problems introduced with Xcode 5 (hopefully temporary):

* Build and Run in the Unity Editor fails to start Xcode 5. Workaround: start Xcode manually first, or double-click the xcodeproj file to bring up Xcode 5 manually, then click the Run/Play button.

### Chapter 11 - Building For Real: Hardware Testing and App Submission

Set up devices, provisioning profiles and app descriptions on the Provisioning Portal and iTunes Connect. Build Angry Bots for test devices and for submission to the App Store.

Xcode no longer displays provisioning profiiles, and it is no longer necessary (or possible) to install development provisioning profiles on test devices via the Xcode Organizer. The profile is autmatically installed if necessary when running/installing the app.

Problems introduced with Xcode 5 (hopefully temporary):

* In Xcode 5, Archive may complain there is no matching provisioning profile for the test device. Workaround: detach the test device before invoking Archive.

### Chapter 12 - Presentation: Icons and Splash Screens

Resume work on the bowling game. Automatically scale the GUI for different screen sizes. Incorporate initial and secondary splash screens.

It should be noted the Fugu Games splash screen and the Fugu icon (also used as a texture in Chapter 3) are based on the Fugu Games logo designed by [Shane Nakamura](http://shanenakamuradesigns.com/).

* page 390: The x and y values specifying the normalized screen coordinates of the GUITexture are entered in the Transform Component's position.

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [GUIUtility](http://docs.unity3d.com/Documentation/ScriptReference/GUIUtility.html)
 * [GUI.matrix](http://docs.unity3d.com/Documentation/ScriptReference/GUI.matrix.html)
 * [Matrix4x4](http://docs.unity3d.com/Documentation/ScriptReference/Matrix4x4.html)
 * [Matrix4x4.TRS](http://docs.unity3d.com/Documentation/ScriptReference/Matrix4x4.TRS.html)
 * [WaitForSeconds](http://docs.unity3d.com/Documentation/ScriptReference/WaitForSeconds.html)
 * [Time](http://docs.unity3d.com/Documentation/ScriptReference/Time.html)
 * [Time.time](http://docs.unity3d.com/Documentation/ScriptReference/Time.time.html)
 * [Time.realTimeSinceStartup](http://docs.unity3d.com/Documentation/ScriptReference/Time.realTimeSinceStartup.html)
 * [Application.LoadLevel](http://docs.unity3d.com/Documentation/ScriptReference/Application.LoadLevel.html)
 * [Application.LoadLevelAsync](http://docs.unity3d.com/Documentation/ScriptReference/Application.LoadLevelAsync.html)
 * [Handheld](http://docs.unity3d.com/Documentation/ScriptReference/Handheld.html)
 * [Handheld.PlayFullScreenMovie](http://docs.unity3d.com/Documentation/ScriptReference/Handheld.PlayFullScreenMovie.html)
 * [Handheld.StartActivityIndicator](http://docs.unity3d.com/Documentation/ScriptReference/Handheld.StartActivityIndicator.html)
 * [Handheld.StopActivityIndicator](http://docs.unity3d.com/Documentation/ScriptReference/Handheld.StopActivityIndicator.html)
 * [IOSActivityIndicatorStyle](http://docs.unity3d.com/Documentation/ScriptReference/IOSActivityIndicatorStyle.html)
 * [Object.Destroy](http://docs.unity3d.com/Documentation/ScriptReference/Object.Destroy.html)
 * [Object.DontDestroyOnLoad](http://docs.unity3d.com/Documentation/ScriptReference/Object.DontDestroyOnLoad.html)

* [Asset Store](http://assetstore.unity3d.com/)
 * [Transitions Manager](http://dftgames.com/)

Books
* [Real-Time Rendering](http://realtimerendering.com/)
* [Tapworthy](http://globalmoxie.com/)

### Chapter 13 - Device Input

Implement touchscreen input for the bowling game, detect shakes with the accelerometer, display video textures with the webcam.

* (page 407) Starting with Unity 4.5, the Camera far property has been renamed farClipPlane.

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Input](http://docs.unity3d.com/Documentation/ScriptReference/Input.html)
 * [WebCamTexture](http://docs.unity3d.com/Documentation/ScriptReference/WebCamTexture.html)
* [iOS Developer Library](http://developer.apple.com/library/ios)
 * [Event Handling Guide](http://developer.apple.com/library/ios/#documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/Introduction/Introduction.html)
 * [Camera Progrmaming Topics for iOS](http://developer.apple.com/library/ios/ipad/#documentation/AudioVideo/Conceptual/CameraAndPhotoLib_TopicsForIOS/Introduction/Introduction.html)
 * [AV Foundation Programming Guide](http://developer.apple.com/library/ios/ipad/#documentation/AudioVideo/Conceptual/AVFoundationPG/Articles/00_Introduction.html)
* [Asset Store](http://assetstore.unity3d.com/)
* [Finger Gestures](http://fatalfrog.com/)
* [Prime31 plugins](http://prime31.com/)

### Chapter 14 - Game Center: Leaderboards and Achievements

Set up Game Center leaderboards and achievements in iTunes Connect. Submit high scores and achievements and activate iOS5-style achievement banners with scripts.

Explore Further

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Social](http://docs.unity3d.com/Documentation/ScriptReference/Social.html)
 * [GameCenterPlatform](http://docs.unity3d.com/Documentation/ScriptReference/GameCenterPlatform.html)


### Chapter 15 - iAd: Banner and Interstitial Ads

Set up iAd in iTunes Connect. Add a banner ad and intersitiai ad to the bowling game with scripts.

* page 443: In "The while loop calls yield", "yield" should be formatted as inline code
* page 443: "the ad will immediately display by with a call to" should read "the ad will immediately display with a call to"
* page 443: "which will show up as check boxes" should read "which will show up as checkboxes"
* page 447: "the static variable of iPhone.generation" should read "the static variable iPhone.generation"

Apple has since discontinued iAd, so there is no longer a scripting interface. There are other ad services with Unity script interfaces, including Unity's own Unity Ads.

### Chapter 16 - Optimization

Optimize for quality, space and speed (just not all at once). Use the Editor and built-in profilers.

* page 474: "Inspector view" should read "Inspector View"
* page 496: "Player Settings" should not be quoted (not a reference to a Unity Manual page)
* page 496 "Automatic Memory Management" should read "Understanding Automatic Memory Management"

Explore Further

* [Unity Manual](http://docs.unity3d.com/Documentation/Manual/index.html)
 * [Getting Started with iOS Development](http://docs.unity3d.com/Documentation/Manual/iphone-GettingStarted.html)
 * [Optimizing Performance in iOS](http://docs.unity3d.com/Documentation/Manual/iphone-performance.html)
 * [Optimizing Graphics Performance](http://docs.unity3d.com/Documentation/Manual/OptimizingGraphicsPerformance.html)
 * [Reducing File Size](http://docs.unity3d.com/Documentation/Manual/ReducingFilesize.html)
 * [Understanding Automatic Memory Management](http://docs.unity3d.com/Documentation/Manual/UnderstandingAutomaticMemoryManagement.html)
 * [Shadows in Unity](http://docs.unity3d.com/Documentation/Manual/Shadows.html)
 * [Asset Bundles (Pro Only)](http://docs.unity3d.com/Documentation/Manual/AssetBundlesIntro.html)
 * [Loading Resources at Runtime](http://docs.unity3d.com/Documentation/Manual/LoadingResourcesatRuntime.html)

* [Reference Manual](http://docs.unity3d.com/Documentation/Components/index.html)
 * [Camera](http://docs.unity3d.com/Documentation/Components/class-Camera.html)
 * [MeshFilter](http://docs.unity3d.com/Documentation/Components/class-MeshFilter.html)
 * [MeshRenderer](http://docs.unity3d.com/Documentation/Components/class-MeshRenderer.html)
 * [BoxCollider](http://docs.unity3d.com/Documentation/Components/class-BoxCollider.html)
 * [Texture2D](http://docs.unity3d.com/Documentation/Components/class-Texture2D.html)
 * [AudioClip](http://docs.unity3d.com/Documentation/Components/class-AudioClip.html)
 * [Mesh](http://docs.unity3d.com/Documentation/Components/class-Mesh.html)
 * [QualitySettings](http://docs.unity3d.com/Documentation/Components/class-QualitySettings.html)
 * [PhysicsManager](http://docs.unity3d.com/Documentation/Components/class-PhysicsManager.html)
 * [TimeManager](http://docs.unity3d.com/Documentation/Components/class-TimeManager.html)
 * [AudioManager](http://docs.unity3d.com/Documentation/Components/class-AudioManager.html)
 * [GUIText](http://docs.unity3d.com/Documentation/Components/class-GUIText.html)
 * [GUITexture](http://docs.unity3d.com/Documentation/Components/class-GUITexture.html)

* [Scripting Reference](http://docs.unity3d.com/Documentation/ScriptReference/index.html)
 * [Performance Optimization](http://docs.unity3d.com/Documentation/ScriptReference/index.Performance_Optimization.html)
 * [StaticBatchingUtility.Combine](http://docs.unity3d.com/Documentation/ScriptReference/StaticBatchingUtility.Combine.html)
 * [MonoBehaviour.useGUILayout](http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour-useGUILayout.html)

### Chapter 17 - Where to Go from Here?

Miscellaneous topics: C# and Editor scripts, plugins, customizing script execution order, promoting your apps, more monetization.

* page 512: "Storekit" should read "StoreKit" as in the Prime31 documentation (or "Store Kit" as in the Apple documentation)
* page 513: "not available on Android either" should just read "not available on Android"
* page 513: There should be a paragraph break after "Twitter, by the way, is another great way to interact with other Unity developers, on a more personal level."
* page 513: Of course, the UNITY_IPHONE preprocessor definition is not active when the build target is Android. Use UNITY_ANDROID instead (or in addition). Unlike iOS, Android apps conventionally have a Quit button and Android devices have a Back button that is recognized by Unity as the Escape key. The GitHub project for this chapter includes those Android-specific changes in the pause menu. Backing up the assertion that the code in this book works on Android, the Learn Unity app is available on Google Play and the Amazon Appstore, and for the Nook and the Nabi tablets.


### Back Cover

* "Three-dimensional games" should read "3D games" (no one says "three-dimensional glasses" or "three-dimensional movies")

## Ebooks

### All Versions

* Many of the quoted titles in the Explore Further sections should be links to online documentation (for the Scripting Reference pages, try searching for those terms in the Scripting Reference search box).

### iBook

No problems that I can see.

### Kindle

* Figure links don't always work.
* There is a second Kindle edition with a publication date of August 4. I don't know what's different about it except it's been reported that the full table of contents (not the Contents at a Glance) has broken links.

### Nook

* URL's display with markup and are not active as links (you can check the sample to see if it's been fixed.

# The Code

The GitHub projects, built up cumulatively through each chapter to create a bowling game similar in style to [HyperBowl](http://hyperbowl.rocks/), do not include assets from the Unity Asset Store and Standard Assets that are used in the book, but you can use them a starting point or to save time in constructing the book examples (but taking shortcuts isn't really recommended). The projects require Unity 4.2 or later and are covered under the MIT open source license.

# The App

The app is currently unpublished on the App Store but available as desktop, web, and Android builds on [itch.io](https://technicat.itch.io/learnunity)

