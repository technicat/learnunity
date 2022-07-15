# Making it Move: Scripting the Cube

## Explore Further

The scene has evolved from pretty and static to pretty and dynamic, merely with the addition of simple scripted movement. We'll jazz up the scene some more in the next chapter with animation and sound, but the major milestone you’ve reached at this point really is learning how to create, edit and debug scripts. From now until the end of the book, you'll be adding scripts, so get used to it!

### Unity Manual

The “Building Scenes” section of the Unity Manual has two pages relevant to the work in this chapter—a description of “Prefabs” and an explanation of the “Component-Script Relationship.”

The one new type of asset introduced in this chapter (besides prefabs) is the script. The page in the “Asset Import and Creation” section on “Using Scripts” introduces the basic concepts covered in our rotation script—creating a script, attaching it to a GameObject, printing to the Console (using the print function instead of Debug.Log as you did), declaring a variable, and even applying a rotation in the Update function.

It’s worth mentioning the page on “Transforms” again, since our rotation script is in the business of modifying Transforms. That page also describes the parent–child GameObject relationship, which technically is among Transforms, but since there’s a one-to-one relationship between GameObjects and Transforms, it’s less confusing to think of the linkage among GameObjects, as displayed in the Hierarchy view.

We dipped into one Advanced topic in this chapter—“Debugging.” This section describes the Console view, the MonoDevelop debugger, and where to find Log files on your file system.

### Scripting Reference

I’ve mentioned two of the three main pieces of official Unity documentation so far—the Unity Manual and the Reference Manual. The third piece is the Scripting Reference. This chapter presented our first foray into scripting, so everything in the “Scripting Overview” section of the Scripting Reference is worth reading at this point. The list of “Runtime Classes” illuminates the inheritance relationship among the Unity classes. After that, I recommend making frequent use of the search box on that page anytime you see anything in a script you don’t recognize (or even if you do recognize it, if you haven’t read its documentation).

### Asset Store

We downloaded iTween from the Asset Store, but iTween users should also visit Bob Berkebile’s official iTween [web site](http://itween.pixelplacement.com/) with comprehensive documentation and demo projects.

Although iTween is popular and one of the first tween packages for Unity, at this point several tween implementations are available (just search for tween in the Asset Store), including Holoville’s HOTween, and Prime31 Studio’s GOKit, source code available on [GitHub](http://github.com/prime31/GoKit).

### Scripting

Although we’re only working with JavaScript in this book, there’s enough JavaScript and C# out in the Unity world that you should get comfortable with both. The book Head First C# by Andrew Stellman and Jennifer Greene is a great visual step-by-step introduction to C#.

And since C# was created by Microsoft as part of its .NET framework, the official C# documentation and other resources can be found by searching for C# on the [Microsoft Developer Network (MSDN)](http://msdn.microsoft.com/).

While you’re on MSDN, search also for .NET documentation, as the Unity scripting engine is implemented with Mono, which is an open source version of .NET.

You probably don’t need to worry about Boo, the other Unity scripting language (I have yet to see a Boo script in the wild).

Put two programmers together in a room, and if there’s anything they’ll fight about, it’s coding conventions. My rule of thumb is to go along with the convention of the official language and framework that I’m coding in. It’s a dull topic with fun names.

For example, Unity uses a combination of camel case and Pascal case in its capitalization rules (or camelCase and PascalCase, if we apply the conventions to themselves). You can look up “camel case” on Wikipedia.

Bracket placement is also a common source of contention. The convention I use here (and by Unity, at least when creating the template for new scripts) is called Egyptian style, according to Jeff Atwood (of StackExchange fame) on his popular blog [Coding Horror](http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html). The article also terms the practice of applying a standard prefix to class names “Smurf naming.”