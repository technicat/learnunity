# Presentation: Screens and Icons

## Explore Further 

Now our bowling game for iOS looks like a real app! It has an icon, a splash screen (or two), an activity indicator spinning away on the splash screen, it runs in portrait orientation, and the graphics scale to fit the screen including the UnityGUI scoreboard and pause menu. The menu is even automatically functional in iOS, with its buttons responding to taps on the screen. We can’t quite say that about the actual gameplay, but we’ll implement touchscreen based game controls in the next chapter.

### Reference Manual

Once again, we’ve spent some time in the Player Settings (a recurring theme now that we’re making iOS builds), so the Reference Manual documentation on the Player Settings is worth a review.

We used just one new Component in this chapter, a GUITexture for our splash screen image. GUITexture and its parent class GUIElement have no relation to UnityGUI (in fact, GUITexture and its sibling GUIText were the closest things to user interface elements before UnityGUI arrived).

This chapter was devoted largely to icon and splash screen images, which should all be imported using the GUI preset import settings, which are documented fo Texture2D in the Asset Components section.

### Scripting Reference

The one new UnityGUI feature introduced in this chapter was the matrix variable in the GUI class. At the time of this writing, the Scripting Reference page for that variable is nearly blank, but the GUIUtility class has some better-documented functions, including ScaleAroundPivot, which can be used as an alternative to setting GUI.matrix (in fact, it is a helper function that sets GUI.matrix internally.

We only used the Matrix4x4.TRS constructor, but the Scripting Reference documentation on Matrix4x4 is not bad, explaining how matrices are used in Unity and listing many class functions that will be useful if you ever have to start messing around with matrices.

The yield instruction WaitForSeconds was already introduced in Chapter 8 for the game over state, and it turns out to be convenient fordisplaying a splash screen a certain number of seconds. We took this opportunity to explore hypothetical implementations of WaitForSeconds and compare the static Time variables Time.time and Time.realTimeSinceStartup. It's an important distinction when the pause menu is up and game time is suspended.

We called the static Application function LoadLevel to transition from the splash scene to the bowling scene, but we also could have called an asynchronous version of the function, Application.LoadLevelAsync. As an asynchronous function, it doesn’t suspend Unity while it’s loading a new scene, so, really, you could have anything happen in the splash scene while waiting for the new scene to finish loading.

As demonstrated with our use of the activity indicator functions in the Handheld class, you can make Objects survive across scenes loads by calling DontDestroyOnLoad called on them and Destroy  them when they're not needed anymore. These are both static functions in the Object class, which is always worth reading up on since it's the parent class of everything that can be in a scene.

To display and hide the activity indicator, we called the StartActivityIndicator and StopActivityIndicator functions in the Handheld class. See the documentation on the activity indicator functions about the necessity to yield before performing a scene load. iOSActivityIndicatorStyle enumeration for a list of the available activity indicator styles.

The Handheld class is worth a looking over, as it contains all the scriptable Unity mobile features (except those specific to iOS). For example, the Handheld class has a static PlayFullScreenMovie function that can play a movie from local storage or streamed from a web site, which is another possibility for a cool-looking splash scene. The Scripting Reference page for that function has details on the supported video formats and how to control the movie player (based, at the time of this writing, on the native iOS movie player, MPMoviePlayerController).

### iOS Developer Library

As we explore Unity iOS features, more and more of the documentation in the iOS Developer Library is relevant. Remember, that documentation is available both on the Apple Developer site (http://developer.apple.com/) and from the Xcode Organizer window.

One document worth reading in its entirely, found in the User Experience topic of the iOS Developer Library, is Apple's iOS Human Interface Guidelines. The original guidelines dating back to the original Mac were the gold standard in user interface best practices. Since then, the guidelines have been split into Mac and iOS versions, but you should read the iOS version if only to avoid app rejections. Related to this chapter, the Custom Icon and Image Creation Guidelines section lists requirements and recommendations for creating app icons and splash screens (known as "launch images" in their terminology).

Many Unity classes that are mobile-specific or iOS-specific will have an Objective-C counterpart. For example, the activity indicator controlled by Unity's Handheld class is accessed in Objective-C via the UIActivityIndicatorView class, also found in the User Experience topic in the Windows and Views section.

### Asset Store

The Transitions Manager from DFT Games, available free on the Unity Asset Store, provides more sophisticated introductory screen behavior than what has been described in this chapter, including fading the screen in and out and using multiple screens. I use the Transitions Manager in all my apps.

### Books

Josh Clark's Tapworthy: Designing Great Apps is the book that convinced me to eschew automatic icon gloss and always select Prerendered Icon in the Unity Player Settings. It's also a good treatment of app design in general.

There are plenty of textbooks on linear algebra (and even a hefty “matrix” article on http://wikipedia.org/), but any computer graphics book will have a primer on the matrix math. For example, [Real-time Rendering](http://realtimerendering.com/) has an appendix on “Some Linear Algebra.”
