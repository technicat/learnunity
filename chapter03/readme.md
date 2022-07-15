# Making a Scene

## Explore Further

This chapter may have seemed like it covered a lot of material (no pun intended) just to create a simple static scene, but a lot of basic Unity concepts were explored along the way, particularly the relationship between Components and GameObjects. As a result, now you have a scene with a bump-mapped and textured Cube, illuminated by a Point Light that’s sporting a Flare, and surrounded by a Skybox. The scene was populated with assets imported from local files, the Unity Standard Assets, and the Unity Asset Store. And the scene isn't completely static due to the MouseOrbit script attached to the Main Camera. Scripting will play a dominant role in this book, starting with the next chapter as we move beyond a static scene.

Before moving on to that, take a break and go over the official Unity documentation on the features used so far, if only to get familiar with where to find this documentation for future reference.

### Unity Manual

The Unity Basics section of the Unity Manual was mostly relevant to the previous chapter, describing the user interface, but that section does have a “Creating Scenes” page that describes the basic elements of a scene.

More relevant is the “Building a Scene” section, which describes the relationship among GameObjects, Components, and scripts, how to use the Inspector View to edit Component properties, and how to navigate the Scene View and move GameObjects, all of which was covered in thsi chapter. Lights and Cameras are also explained. One feature listed in this section that won’t be used in this book is the Terrain Engine (it is available in Unity iOS but slow). Terrain is a significant and impressive Unity feature, though, so it’s worth a read.The “Asset Import and Creation” section describes the asset types used in this chapter: Meshes, Materials, textures and scripts. The process of importing assets and the Asset Store are also explained.

We haven’t arrived at a point where we have gameplay, but the “Creating GamePlay” section has a page on “Transforms,” which is we saw is fundamental to understand even just for placing static GameObjects.

### Reference Manual

Getting more in depth than the Unity Manual, the Reference Manual describes each Component in detail, explaining its properties and documenting the use of the Component. The Reference Manual also documents the asset types and gives an explanation of GameObject.

As a rule, you should read the Reference Manual documentation for every Component and asset type you use. Remember, there is a Help icon on each Component in the Inspector view that will bring up the appropriate Reference Manual page when you click it. Like the Unity Manual, the Reference Manual is available not just from the Unity Help menu but als on the Unity web site under the Learn tab (which can be reached directly at http://docs.unity3d.com/).

The “Settings Manager” section of the Reference Manual includes a page on the Render Settings, which is where the Skybox in this chapter was assigned.The “Transform Components” section lists just one Component, naturally, the Transform Component, which is attached to very GameObject.

The “Mesh Components” section is more interesting, as it describes both the MeshFilter and MeshRenderer Components necessary for any GameObject with Mesh, such as the Cube created in this chapter.The “Rendering Components” section is more bountiful, yet, featuring the Camera Component and its associated GUILayer Component and FlareLayer. The Light Component is also documented here.Although assets aren't really Components, the Reference Manual has a section titled “Asset Components,” which lists the various asset classes. In this chapter, Flare, Material, Mesh and Texture2D were incorporated into the scene (remember that Skybox is really a Material).

The most fun reading is in the section titled “Built-In Shader Guide,” which describes in detail (and with pictures) all of the built-in shaders, ranging from the simple and fast to very fancy. The Cube in this chapter started out with the default Diffuse shader and was replaced with a deluxe Specular Bump Map shader. As mentioned in this chapter, a shader is really a program, so if you can't find a built-in shader that suits your needs, you can write your own by following the examples and instructions in the “Shader Reference” section.

### Asset Store

This chapter begins our book-long practice of using free assets from the Unity Asset Store. I recommend browsing the Asset Store regularly to check the latest releases. Besides the free textures, models, and scripts, there are plenty of reasonably priced packages that can save you a lot of time and work. The Asset Store can also be viewed with a regular web browser at http://assetstore.unity3d.com/ (but without the ability to purchase or download any assets).

### Computer Graphics

Computer graphics is a huge and intricate area of study. This chapter worked with 3D models, textures, bump maps, light flares, skyboxes, and we’re just getting started. So it’s well worth reading up on basic (and advanced) computer graphics, such as the popular and comprehensive text Real-Time Rendering, by Tomas Akenine-Möller, Eric Haines, and Naty Hoffman. Mark Haigh-Hutchinson’s Real-Time Cameras is an entire book devoted to the subject of virtual Cameras and their control schemes.

I won’t be covering the process of creating assets that can be imported into Unity, but Luke Ahearn has two books that may be generally helpful: 3D Game Textures: Create Professional Game Art Using Photoshop and 3D Game Environments: Create Professional 3D Game Worlds. And you can tell from the title of Wes McDermott’s Creating 3D Game Art for the iPhone with Unity that it’s an appropriate complementary text for this book. 