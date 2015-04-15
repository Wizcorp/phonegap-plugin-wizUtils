

# phonegap-plugin-wizUtils

- PhoneGap Version : 3.0
- last update : 15/4/2015

## Description

PhoneGap plugin for general utility functions to access information from the native OS.

## Install (with Plugman - example iOS) 

	cordova plugin add https://github.com/Wizcorp/phonegap-plugin-wizUtils
	cordova build ios
	
	< or >
	
	phonegap local plugin add https://github.com/Wizcorp/phonegap-plugin-wizUtils
	phonegap build ios

## Example Code

**Get App File Name**

        wizUtils.getAppFileName(Function success);
        
returns String eg. "game.app" (iOS) or "game.apk" (Android)

**Get Bundle Version**

        wizUtils.getBundleVersion(Function success); 

returns String eg. "1.0.0"

**Get Bundle Display Name**

        wizUtils.getBundleDisplayName(Function success); 

returns String eg. "bundleDisplayName" ''

**Get Bundle Identifier**

        wizUtils.getBundleIdentifier(Function success);

returns String eg. "com.bundle.identifier"

**Get Device Height**

      wizUtils.getDeviceHeight(Function success); 

returns Int eg. 480

**Get Device Width**

        wizUtils.getDeviceWidth(Function success); 

returns Int eg. 320

**Get Text**

        wizUtils.getText(Function success, Function failure);

returns String (current clipboard/clipbuffer text)

**Set Text**

        wizUtils.setText(String text, Function success, Function failure);

Sets the current clipboard/clipbuffer text

**Restart**

        wizUtils.restart(Boolean true/false);

Restart the app.

 - If a boolean value of true is passed, the splash screen will be shown.
 - If a boolean value of false is passed, the splash screen will not be shown. 
 - If the AutoHideSplashScreen key is set to YES in the Cordova.plist file.
 - Otherwise, the splash screen will not be shown.
