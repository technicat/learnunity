# Building for Real: Device Testing and Submission

## Explore Further


Testing Unity iOS apps in the Unity Editor and in the iOS Simulator is convenient, but there’s no substitute for the real thing! The good news is that building for real hardware doesn't change much on the Unity side (really, just setting the SDK to Device SDK in the Player Settings). The bad news is that you have to go through the entire Apple developer registration, Provisioning Portal setup for your test devices and provisioning profiles, and iTunes Connect setup for all your apps. In a sense, this is the chapter where you became an iOS developer! 

Now that we’ve got that out of the way, we can leave the Angry Bots project again and return to our bowling game and spend the remainder of this book adapting the game for iOS. However, we haven’t seen the last of iTunes Connect. We will use iTunes Connect later when we incorporate Game Center (Chapter 14) and iAd (Chapter 15).

### Unity Manual


Since the the simulator and device builds for Unity iOS involve nearly identical steps, the Unity Manual sections mentioned in the previous chapter also apply to this chapter. In addition, the “Getting Started in iOS Development” section of the Unity Manual has a page that briefly lists the steps required by Apple for submitting an app to the App Store, and the “Debugging” page in the Advanced section explains how to attach a MonoDevelop debugging session to a Unity iOS app running on a device.

### Apple Developer Site

The road to all Apple developer information begins at the [Apple Developer site](http://developer.apple.com/), so that should be your first stop. From there, you can find descriptions of the iOS Developer Program (and other Apple developer programs) and commence the registration process.Even before the registration is complete, you can explore the iOS Dev Center, which includes the iOS Developer Library, which in turn contains the iTunes Connect Developer Guide (listed under Languages and Utilities).

Tip The documentation in the iOS Developer Library is also available in the Xcode Organizer. As you might gather from all the work that takes place in the Organizer (provisioning profiles, screenshots, app submissions), you might be spending most of your Xcode time there!

Once your registration is approved, you can access the iTunes Connect site and the Provisioning Portal on the Apple Developer Site to complete the mobile provisioning and app submission steps covered in this chapter.
