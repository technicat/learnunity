# Let's Bowl! Advanced Physics

## Explore Further

The bowling game is starting to look like a bowling game at this point (whereas at the end of the previous chapter, we had at best what could be called a rolling game). But although he player can roll the ball around and knock down bowling pins, we still don't have the rules of the game. Stay tuned for that in the next chapter, which will get much heavier into scripting. In fact, this chapter is sort of a turning point, trending to more and more scripting and less introduction of new Components. So from now on, so you should be spending most of your time in the “Scripting Reference” of the Unity documentation.

### Scripting Reference

The Instantiate function in the Object class was introduced to create the bowling pins at runtime. This is the function used to spawn GameObjects, typically from prefabs. In other games, you might use Instantiate to spawn anything from pickup items to NPC's. The function is described in the “Scripting Overview” but its page in “Runtime Classes” has more detailed information.

One new callback, Awake, was introduced as an alternative to the Start callback. The MonoBehaviour collision callbacks OnCollisionEnter, OnCollisionStay, and OnCollisionExit were introduced in the previous chapter but used again for rolling and collision sounds. The Collision class for information on collisions: relative velocity, the GameObject that was collided against. Other data such as the actual point of contact are also available.

The page for the Rigidbody Component is worth reading in its entirety. Its variables correspond largely to the properties available in the Inspector view, and besides the AddForce function you used to push the Ball, there are many related functions: AddRelativeForce, Add Torque, AddRelativeTorque, AddExplosionForce, AddForceAtPosition.

The Transform class was used again, this time checking Transform.position to determine if the Ball had rolled off the Floor. Since Quaternions were mentioned, take a look at the rotation and localRotation variables in Transform and compare to eulerAngles and localEulerAngles variables.From the GameObject class, the SendMessage and BroadcastMessage functions were used to invoke the ResetPosition functions in other GameObjects. There's also a SendMessageUpward function that works like BroadcastMessage, except the message is sent up the GameObject's hierarchy instead of down. The message functions are also defined in the Component class.

AudioSource functions were used to play and stop AudioClips. Other functions are useful if you want to refine your sound code. For example, the HyperBowl rolling sound code changes the volume of the sound (using the AudioSource.volume variable) according to the ball’s velocity, which not only provides a nicer rolling sound but also a softer cutoff of the sound when stopping.

### Assets

We saw the Asset Store has a bountiful selection of free barrel models and sound libraries. And there's much more if you don't restrict yourself to free assets.
 Although the Asset Store doesn't yet have bowling pin models, it's not hard to find some on 3D model marketplaces such as [Turbosquid](http://Turbosquid.com/). Free audio, including bowling sounds, are available on the Creative Common licensed [Freesound](http://freesound.org/).