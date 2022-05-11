# A Unity Tour

## Explore Further

We've come to the end of this Unity tour and our play time with Angry Bots demo. Beginning with the next chapter, you'll be creating Unity projects from scratch to learn the game engine features. But this won't be the last you'll see of Angry Bots, as we'll return to that project in Chapters 10 and 11, repeating this process to introduce Unity iOS development. Until then, starting with the next chapter, you'll be creating Unity projects from scratch and exploring general and mostly cross-platform Unity game engine features.

This is the first chapter that really starts using Unity. You haven’t yet started building your own scene (that will begin in Chapter 3), but you’ve utilized the sample Angry Bots project installed with Unity to get familiar with the Unity Editor. From this point on, there are plenty of official Unity resources that expand on the topics I will be covering.

### Unity Manual

As you can see, there's a lot of Unity user interface, and we've hardly covered it all. This is a good time to get serious about reading the Unity Manual, either from within the Unity Editor (the Welcome screen or the Help menu) or on the [Unity web site](http://unity3d.com/) under the Learn tab in the “Documentation” section. The web version is pretty handy when you want to look something up or just read about Unity without having a Unity Editor running nearby.

Most of what was covered in this chapter matches topics in the Unity Basics section of the Unity Manual, particular the sections on “Learning the Interface,” “Customizing Your Workspace,” “Publishing Builds,” and “Unity Hotkeys” (although I think a better reference is just to check the keyboard shortcuts listed in the menus).

I did jump ahead into the Advanced section of the Unity Manual and touch on Unity’s support for version control. That’s covered more in depth with the Unity Manual’s page on “Using External Version Control with Unity.”

### Tutorials

Besides the “Documentation” section, the Learn tab on the Unity web site also includes a “Tutorials” section that features an extensive set of Beginning Editor videos. As the name implies, these videos provide an introduction to the Unity Editor, and in fact the set of videos cover much of what was discussed in this chapter, including descriptions of the most important views (the Game View, Scene View, Hiearchy View, Inspector View and Project View) and even the process of publishing a build.

### Version Control

Although I only discussed version control briefly, in the context of explaining how to remove meta files, that topic is worth a little more discussion, since a VCS is so important to software development (which you'll realize the first time you lose your project or can't remember what change you made that broke your game!). If you already have a favorite VCS, you may want to use it with Unity, and if you haven’t been using one, then you may want to consider it if only to keep old versions of your project around in case you need to roll back, with the ability to check differences between versions.

Among version control systems, Perforce is a popular commercial tool used in game studios, and Subversion (svn) has a long history as an open source option. These days, distributed version control systems like Git and Mercurial are trending. I used Mercurial on Bitbucket (http://bitbucket.com/) for my internal projects and post public projects on GitHub, including the projects for this book.

To say Unity VCS support is product agnostic is really another way of saying Unity doesn’t have any particular version control system integrated into the Unity Editor. The meta files, and YAML scene files for Unity Pro users, simply provide better compatibility with text-oriented version control systems that are commonly used for source code. You still have to run the VCS operations yourself outside of Unity. You can find out more about YAML, by the way, on http://yaml.org/

I find it convenient to use the Mac GitHub app provided on the GitHub web site and similarly Sourcetree for BitBucket, also available on that web site. 
And as we mentioned while explaining the options for Version Control Mode in the Editor Preferences, Unity also offers a VCS designed specifically for Unity called the Unity Asset Server. It requires the purchase of a Unity Team License.