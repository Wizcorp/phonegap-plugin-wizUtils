
# phonegap-plugin-wizUtils

phonegap version : 2.7<br />
last update : 13/05/2013<br />


## Description

PhoneGap plugin for general utility functions to access information from the native OS.


## Install (iOS)

Project tree

        www
            / phonegap
                / plugin
                    / wizUtils
                        / wizUtils.js
        ios
            / project
                / Plugins
                    / wizUtils
                        / wizUtils.h
                        / wizUtils.m

1 ) Arrange files to structure seen above.


2 ) Add the following line to config.xml in the plugins section;

        <plugin name="WizUtils" value="WizUtils" />


3 ) Add ```<script>``` tag to your index.html

        <script type="text/javascript" charset="utf-8" src="phonegap/plugin/wizUtils/wizUtils.js"></script\>
        
(assuming your index.html is setup like tree above)

## Example Code

**Get App File Name**

        wizUtils.getAppFileName(Function success);
        
returns String eg. "game.app"(iOS) or "game.apk" (Android)

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
