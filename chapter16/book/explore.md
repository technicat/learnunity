# Chapter 16

## Explore Further

I began this chapter by citing the perils of optimizing too early, at the risk of complicating things before you even got something working. But you should keep your performance target in mind from the very beginning of development. Start simple (the Unity documentation recommends rendering no more than 40,000 vertices on the iPhone 3GS), get something working, optimize enough to meet your performance target, continue adding content and functionality, and stop and optimize every time the game’s performance falls below your target. And remember to profile and optimize the bottlenecks. It will do you no good to optimize something that’s taking 10% of your frametime and leave alone something else that’s taking 50%.

### Unity Manual

In the Unity Manual, the section “Getting Started with iOS Development” has several pages on “Optimizing Performance in iOS,” covering the “Player Settings” we adjusted to optimize builds, description of the built-in profiler, and optimizing the build size.

The “Advanced” section documents the Profiler available with Unity Pro and also the offline optimization features mentioned: lightmapping and occlusion culling. The “Advanced” section includes many other pages related to optimization: “Optimizing Graphics Performance,” “Reducing File Size,” “Automatic Memory Management” (garbage collection), and “Shadows” (in particular, “Shadow Performance”). The pages on “Asset Bundles” and “Loading Resources” explain how assets can be downloaded and brought into a scene on demand, which is a technique that can be used to manage the installed app size.

### Reference Manual

The Reference Manual describes all the Components and Assets we optimized. Among those Components, we tweaked the Camera frustum and visibility mask, also adjusted the culling mask and distance for the Light in addition to disabling its shadow, minimized the number of shadow casters and receivers per MeshFilter, simplified the shaders for each MeshRenderer, and replaced a MeshCollider with a Box Collider. We looked over the Import Settings for the various Asset types referenced by the Components: Texture2D, AudioClip, Mesh, and Animation. The Reference Manual also documents the Settings Managers we customized, including the Quality Settings, Physics Manager, Time Manager, and Audio Manager. We also used the GUIText Component, sibling of the GUITexture we use for a splash screen, for our frame rate display.

### Scripting Reference

The “Scripting Overview” section of the Scripting Reference has a Performance Optimization page with some tips on how to write faster scripts. The one new function we learned in this chapter is the static function Combine in the StaticBatchingUtility class (Combine is the only function in that class), which we called to batch a hierarchy of GameObjects at runtime. The one new variable we learned in this chapter is the useGUILayout variable in the MonoBehaviour class, which when set to true provides a performance increase by telling the UnityGUI system that the current OnGUI callback will not be performing any automatic layout using the GUILayout functions.

The Settings Managers all have corresponding classes so that their settings can be queried and set with scripts. Because all of the Settings Managers except Render Settings are active for the entire game and not per scene, script access allows us to adjust settings for each scene. For example, we might define a Quality Level for each scene and add a script to each scene that loads the appropriate Quality Level. The classes corresponding to the Settings Managers discussed in this chapter include Quality Settings, Audio Settings, Physics, and Time.

We also used the Time class, evaluating its timeScale and deltaTime variables and setting the text variable of a GUIText for our rudimentary frame rate display.

### Asset Store

The Asset Store lists a few profiling systems (search for “profiler”) and some object pooling systems (search for “pool”), such as PoolManager, Smart Pool and Pooling Manager. That last one, from DFT Games, is free.

### On the Web

The Unity wiki at http://wiki.unity3d.com/ has some performance tips under its “Tips, Tricks and Tools” section and several performance-related scripts. In particular, the “FramesPerSecond” page lists several frame-rate display scripts more sophisticated than the one we created in this chapter (for example, they calculate the frame rate from a series of frames for a steadier display).

The Umbra occlusion culling system is developed by [Umbra Software](http://umbrasoftware.com/). The Beast lightmapping system is an [Autodesk product](http://gameware.autodesk.com/beast).
Books

I've mentioned [Real-Time Rendering](http://realtimerendering.com) a couple of times, already, but it's really really relevant to the graphics optimizations in this chapter. Just the treatment on mipmapping is a good read.