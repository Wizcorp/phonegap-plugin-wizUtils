


# PLUGIN: 

phonegap-plugin-wizUtils
phonegap version : 1.7<br />
last update : 10/05/2012<br />


# DESCRIPTION :

PhoneGap plugin for general utility functions to access information from the native OS.

<br />
<br />
<br />
# EXAMPLE CODE : #
<br />
<br />
Get Bundle Version<br />
<pre><code>
wizUtils.getBundleVersion(Function success); 
* returns String eg. "1.0.0"
</code></pre>
<br />
<pre><code>
wizUtils.getBundleDisplayName(Function success); 
* returns String eg. "bundleDisplayName" ''
</code></pre>
<br />
<pre><code>
wizUtils.getBundleIdentifier(Function success);
* returns String eg. "com.bundle.identifier"
</code></pre>
<br />
<pre><code>
wizUtils.getDeviceHeight(Function success); 
* returns Int eg. 480
</code></pre>
<br />
<pre><code>
wizUtils.getDeviceWidth(Function success); 
* returns Int eg. 320
</code></pre>
<br />
<pre><code>
wizUtils.wizUtils.setSplashInBackground(Boolean true/false);
</code></pre>
<br />