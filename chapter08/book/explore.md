# Let's Play! Scripting the Game

## Explore Further

This chapter was a change of pace, concentrating solely on scripting. Most of that scripting was added to the game controller script, FuguBowl.js, in the form of a state machine, but scoring code was incorporated in a new script, FuguBowlPlayer.js.

If you're tired of writing big chunks of code and long for the little script snippets that we started with, you just have to endure writing one more big script in the next chapter, for the user interface. And, as a counterpart for the scoring code added in this chapter, the next one includes a small additional script to display a scoreboard.

### Unity Manual

State machines are useful not only for game control logic but also for anything that can be represented as going through different states (simple examples: a light is on or off, a weapon is locked and loaded, a door is open or closed). State machines are particularly useful for animation (walking, running, throwing) which is why the new Mecanim animation system does have its own FSM capability. This is described in the Unity Manual, under “The Mecanim Animation System” section, in “Animation State Machines.”

### Scripting Reference

The major scripting technique introduced in this chapter was the use of coroutines, specifically to implement an FSM in the FuguBowl script. The Scripting Overview section of the Scripting Reference has a page on “Coroutines and Yield,” that provides a basic explanation some examples.

The classes related to coroutines include Coroutine and WaitForSeconds (both of them inherit from YieldInstruction). The one function we used is the StartCoroutine function of MonoBehaviour. The documentation page for each MonoBehavior callback specifies whether the callback can be used as a coroutine (as we saw, Start can, but Awake, Update, and FixedUpdate cannot).

The added code in the FuguBowl script also had frequent cause to access Components, so the page on “Accessing Components” is relevant. That page lists the Component and GameObject variables that can be used to access commonly attached Components and also provides examples on how to call the function GetComponent (either on a Component or a GameObject) to access Components, including scripts.

### Asset Store

Several more sophisticated FSM frameworks are available on the Asset Store. A search for “fsm” in the Asset Store window brings up several, including a popular visual programming package called Playmaker, developed by Huton Games.

### On the Web

[Wikipedia](http://wikipedia.org/) has an extensive description of bowling and its scoring rules. Just search for “bowling” on the site. And if you search for “state machine” you'll find an article that explains probably more than you'll ever want to know about FSM's!

I mentioned some game engines have FSM's built into their scripting system. It's interesting to compare them and see how FSM's are implemented in those systems. For example, CryEngine has a state-switching mechanism built into its Lua scripts. Visit the CryEngine 3 Free SDK site and search for “state” to find an article on “Entity States.”

I worked on a CryEngine-based virtual world called Blue Mars, which heavily utilized that FSM support. Visit the Blue Mars wiki and search for “entity script” to the introductory examples (I actually started that wiki entry five years ago!)

And even the most well-known virtual world, Second Life, has FSM support. Search for “state” on the Second Life [wiki](http://wiki.secondlife.com) to see how states are defined using the Linden Scripting Language (LSL).