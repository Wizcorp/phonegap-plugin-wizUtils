


# PLUGIN: 

phonegap-plugin-wizUtils
phonegap version : 2.4<br />
last update : 13/05/2013<br />


# DESCRIPTION :

PhoneGap plugin for general utility functions to access information from the native OS.


# CHANGELOG: 
- Updated to Cordova 2.4
- Updated to Cordova 2.3


# KNOWN ISSUES:
- None.


# INSTALL (iOS): #

Project tree<br />

<pre><code>
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
</code></pre>



1 ) Arrange files to structure seen above.


2 ) Add the following line to config.xml in the plugins section;<br />
<plugin name="WizUtils" value="WizUtils" />


3 ) Add \<script\> tag to your index.html<br />
\<script type="text/javascript" charset="utf-8"
src="phonegap/plugin/wizUtils/wizUtils.js"\>\</script\><br />
(assuming your index.html is setup like tree above)

<br />
<br />
<br />
# EXAMPLE CODE : #
<br />
<br />
Get App File Name<br />
<pre><code>
wizUtils.getAppFileName(Function success);
* returns String eg. "game.app"(iOS) or "game.apk" (Android)
</code></pre>
<br />
Get Bundle Version<br />
<pre><code>
wizUtils.getBundleVersion(Function success); 
* returns String eg. "1.0.0"
</code></pre>
<br />
Get Bundle Display Name<br />
<pre><code>
wizUtils.getBundleDisplayName(Function success); 
* returns String eg. "bundleDisplayName" ''
</code></pre>
<br />
Get Bundle Identifier<br />
<pre><code>
wizUtils.getBundleIdentifier(Function success);
* returns String eg. "com.bundle.identifier"
</code></pre>
<br />
Get Device Height<br />
<pre><code>
wizUtils.getDeviceHeight(Function success); 
* returns Int eg. 480
</code></pre>
<br />
Get Device Width<br />
<pre><code>
wizUtils.getDeviceWidth(Function success); 
* returns Int eg. 320
</code></pre>
<br />
Get Text<br />
<pre><code>
wizUtils.getText(Function success, Function failure);
* returns String (current clipboard/clipbuffer text)
</code></pre>
<br />
Set Text<br />
<pre><code>
wizUtils.setText(String text, Function success, Function failure);
* Sets the current clipboard/clipbuffer text
</code></pre>
<br />
Restart<br />
<pre><code>
wizUtils.wizUtils.restart(Boolean true/false);
* Restart the app.
* If a boolean value of true is passed, the splash screen will be shown.
* If a boolean value of false is passed, the splash screen will not be shown.
* If a boolean value is not provided:
*   If the AutoHideSplashScreen key is set to YES in the Cordova.plist file.
*   Otherwise, the splash screen will not be shown.
</code></pre>
<br />
