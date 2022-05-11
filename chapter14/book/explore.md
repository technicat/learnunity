# Chapter 14

## Explore Further

This has been one of the more efficient scripting chapters. With just a few lines of code, our game is now connecting to the Game Center, submitting achievements and scores, and displaying the achievements and the leaderboard from the pause menu!

The bulk of the work was spent in the Game Center setup on iTunes Connect. Even there, designing the leaderboard and set of achievements for a bowling game is straightforward, since the rules and traditions are so well-defined. Chances are, if you design a new game, you'll have to put some thought into what leaderboards and achievements you want in your game, and you should probably think about that early in the design process.

### Scripting Reference

This chapter used the Social class almost exclusively to access the Game Center features used in this chapter. The Scripting Reference page for that class explains its role in encapsulating access to Game Center and potentially other social gaming platforms (although for now, Game Center is the only one).

We made do with the minimum set of functions required to report scores and achievements and display the results: accessing Social.localUser to connect to Game Center, calling Social.ReportProgress and Social.ReportScore to submit achievements and scores, respectively, and calling Social.ShowAchievementsUI and Social.ShowLeaderboardUI to bring up the Game Center display for the player’s achievements and game’s leaderboards. The documentation for the Social class lists several other functions that allow finer-grained control, for example, to retrieve information from Game Center to populate a custom leaderboard display.

We bypassed Social and accessed the GameCenterPlatform class directly to invoke its showDefaultAchievementsCompletionBanner function, enabling iOS 5-style achievement banners. The page for the GameCenterPlatform class explains what namespace it’s in and includes some notes on the Game Center Sandbox.

### iOS Developer Library

The Game Center chapter of the iTunes Connect Developer Guide is the definitive source on setting up achievements and leaderboards. The Guide is available within the iOS Developer Library](http://developer.apple.com/library/ios) or in the Xcode Organizer.

The inner workings of the Game Center are explained in the Game Center Programming Guide in the iOS Developer Library, under the Networking and Internet topic. The portion of the Game Center that can be integrated into apps, as opposed to the server portion operated by Apple, is actually called Game Kit and also features support for networked multiplayer gaming.

### Asset Store

Game Center isn’t the only social gaming platform available for iOS. Many have come and gone (OpenFeint, Agon Online), but there are still some other options. Under its Services category, the Asset Store offers plug-ins for PlayHaven and [Swarm](http://swarmconnect.com/), both offering leaderboards, achievements, and other social gaming features. Another Game Center plugin, from Hippo Games, is listed under Scripting/Integration.

Before Unity had built-in Game Center support, Prime31 Studios provided a Game Center plugin, which is still available at http://prime31.com/ (but not on the Asset Store) and is an option for developers who need some features not provided by Unity. For example, the Prime31 plugin includes a function for issuing achievement challenges (a feature of iOS 6). Prime31 also offers a Game Kit plugin for multiplayer gaming support that is on the Asset Store.