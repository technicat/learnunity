# Let's Dance! Animation and Sound

## Explore Further

Thus ends our dalliance with dancing skeletons. For the rest of this book, you'll be concentrating on developing a bowling game with mostly physics-based motion. But you should already feel a sense of accomplishment, having spent the past three chapters evolving a simple static cube scene into a musical dancing skeleton scene, complete with fancy graphics features like particle effects and dynamic shadows. But fancy features tend to be expensive features in terms of performance, so use them judiciously!

### Unity Manual

The Asset Import and Creation section covers the two new types of assets introduced in this chapter: audio and animation. The page titled “Audio Files” lists the audio formats recognized by Unity and describes the AudioClip asset that results from importing an audio file.In earlier chapters, we just dipped out toes into the Creating Gameplay section of the Unity Manual, but now we've deeper end, adding content described in the pages “Particles,” “Legacy Animation System,” and “Sound.” Also, the “Mecanim Animation System” is the future of Unity animation, so it’s worthwhile to read up on that.

Dynamic shadows is a big topic. The Advanced section of the Unity Manual has an extensive treatment on “Shadows in Unity”, which covers “Directional Shadows,” “Troubleshooting Shadows,” and “Shadow Size Computation.”

### Reference Manual

The Animation section of the Reference Manual has pages on the “Animation Component” and “Animation Clip” asset used by the Legacy animation system. This section also includes several pages on Components used in the new Mecanim animation system.

The Audio section lists the audio Components need to add music to the dancing scene constructed in this chapter: “AudioListener” (normally automatically attached to the Main Camera) and “AudioSource” (attached to the sound source). In addition, the section lists “Audio Filter Components” (Pro feature) that can add effects like echo, for example.

The Effects section has a page on the new Shuriken particle system and multiple pages on the Legacy particle system.

The Reference Manual also documents the various Settings Managers, including the one for “Quality Settings,” which you used to adjust your shadow quality, but it also affects other visual quality elements, such as lighting and particles.

### Asset Store

The Asset Store not only offers a lot of music in the Audio category, much of it free, but also provides scripts for playing music. If you want to play more than one song in your dance scene, you could write a script that plays a fixed or random sequence of songs, using the Unity functions defined in the AudioSource class (to play and stop music) and AudioListener class (to control the volume). But it’s easier to just download, for example, the Free Jukebox script from the Asset Store (or Jukebox Pro if you’re willing to part with a few dollars).

### Computer Graphics

I mentioned the book Real-Time Rendering at the end of Chapter 3, and it merits a recommendation again for the computer graphics topics you encountered in this chapter: animation, particle effects, and dynamic shadows. There are many books just on character animation, including those on the content-creation side for professional animators, such as George Maestri’s Digital Character Animation.