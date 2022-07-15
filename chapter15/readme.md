# iAd: Banner Ads and Interstitial Ads

## Explore Further

This chapter has been the shortest by far, and that’s a good thing. It means our game is functionally complete and that adding ads is really simple. Even the setup on iTunes Connect wasn't bad! In practice, though, you may need to put some thought into where and when to place ads, especially interstitial ads, and the earlier in the design process that takes place, the better.

### Scripting Reference

We managed to do a lot with just a little code in this chapter. Only two classes were required to make use of iAds: ADBannerView and ADInterstitialAd, and in a typical app you would only use one of those classes (having both banner ads and interstitial ads is a bit much!). The pages for both of those classes have script examples.

The iPhone class contains anything that is specific to iOS (much of what used to be iOS-specific is now also applicable to Android and is now in the Handheld class). For example, we check the static variable iPhone.generation to find out if we’re running on an iPad. It's worth checking the page on the iPhoneGeneration enum to see the set of iOS hardware recognized by Unity.

### iOS Developer Library

The Unity ADBannerView and ADInterstitialAd classes correspond to same-named classes in Objective-C. The iAd Programming Guide in the iOS Developer Library describes those classes and provides a lot of details on how to effectively deploy banner and interstitial ads.

### Asset Store

iAd isn’t your only in-app advertising option. Once you start releasing apps, you will probably start receiving e-mails from numerous account managers at various mobile ad vendors. In fact, iAd originated as a product of Quattro Wireless before Apple acquired that company to gain its advertising product. Third-party ad vendors typically have their own iOS SDK and thus require a Unity plugin to access that SDK. Some of these SDKs are available on the Asset Store under the Services category, including PlayHaven and Inneractive.

### Outside the Asset Store

As with their Game Center plugin, Prime31 Studios offered an iAd plugin before Unity introduced their iAd scripting support. Prime31 offers plugins for many other advertising services, including AdMob, AdWhirl, MobClix, and many more, available at http://prime31.com/.

Kiip provides an interesting twist on ads. A Kiip-enabled app features coupons that resemble banner ads but are presented like achievements.