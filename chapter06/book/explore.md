# Let's Roll! Physics and Controls

## Explore Further

Now we have the beginnings of real gameplay. It's not a complete bowling game, yet, but it has physics (a ball rolling on a floor), interactive control (pushing the ball), and camera movement (following the ball). Each of those features are rich topics in game development, but in particular we'll be digging deeper into physics in the next chapter with the addition bowling pins and collision-based sound effects. Then the game will look a lot more like a bowling game!

### Unity Manual

In the Asset Import and Creation section, the page on “Procedural Materials,” which you used on the Floor, describes the Substance archive format a little bit and provides an overview of the tools used to create and analyze procedural materials.

In the Creating Gameplay section, the page on “Input” describes the Input class and its GetAxis function used in the FuguForce script implemented in this chapter and lists the joystick and keyboard values passed to that function. The lower portion of that page describes Input functions and variables available for iOS, so you can read that for a preview of this book's chapter on iOS input.

This chapter has been mostly about physics, so the page on “Physics” is the most important to read. It lists all the collider types, including the Sphere Collider, Box Collider, and Mesh Collider used in this chapter. The page describes the differences between Rigidbodies (the ball) and static colliders (the floor), and how Physic Materials and their properties affect collision behavior.

### Reference Manual

In the Asset Components section, the page on “Procedural Material Assets” explains what you see in the Project View and Inspector View for procedural materials.
The section on Physics Components lists all the available colliders in detail, along with the available joints (including hinges and springs), constant force, and cloth components (cloth is not supported in Unity iOS).A new Settings Manager was introduced in this chapter, the “TagManager,” which was used to create a new tag for the Floor.

In the Scripting Concepts section, the page titled “What Is a Tag?” expands on how to create a tag and apply it to a GameObject, along with an example of how a tag can be used to find a GameObject at runtime.

The page on “Rigidbody Sleeping” explains how a Rigidbody “goes to sleep” when it rests. This is a nice optimization that reduces unnecessary physics computation.

### Scripting Reference

In the Runtime Classes listing, the page for the “MonoBehaviour” class lists the collision callbacks that were introduced in this chapter: OnCollisionEnter, OnCollisionStay, and OnCollisionExit.

We queried the “Collision” class for information on collisions: relative velocity, the GameObject collided against. Other data like actual point of contact are available.

I introduced the “Rigidbody” Component in this chapter, and the Script Reference page for this class is worth reading in its entirety. It’s variables correspond largely to the properties available in the Inspector view, and besides the AddForce function you used to push the Ball, there are many related functions: AddRelativeForce, AddTorque, AddRelativeTorque, AddExplosionForce, AddForceAtPosition.

“Component” has several variables that act as shortcuts to reference other Components often attached to GameObjects. Of the two scripts created so far in this book, the FuguRotate script references the transform variable, and the FuguForce script references the rigidbody variable. The Component variables mirror the same set of variables in “GameObject.”

The one function in the “Input” class that we used is Input.GetAxis. If you plan on making any desktop or web games, you’ll want to check out the various functions used to query the keyboard, mouse, and joystick. This page also lists the Input functions available for mobile applications.

### On the Web

The physics implementation in Unity is based on an older version (2.x) of the PhysX engine, originally developed by NovodeX, acquired by Ageia who bundled it with a hardware physics accelerator, and now a product of nVidia. The latest version (3.x) is available on the [nVidia Developer Zone](https://developer.nvidia.com/physx). The PhysX Software Development Kit is worth a look just to get a better idea what physics engine features underlie the Unity physics Components and script functions.

The fairly new Learn center on the [Unity web site](http://unity3d.com/) includes an extensive set of physics tutorials covering much of what was discussed in this chapter and will be discussed in the next chapter.
