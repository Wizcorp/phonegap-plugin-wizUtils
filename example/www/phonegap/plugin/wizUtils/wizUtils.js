cordova.define("jp.wizcorp.phonegap.plugin.wizUtilsPlugin.wizUtilsPlugin", function(require, exports, module) {
	/* WizUtils for PhoneGap - For all your wizarding needs!
	 *	
	 * @author Ally Ogilvie
	 * @copyright Wizcorp Inc. [ Incorporated Wizards ] 2014
	 * @file - wizUtils.js
	 * @about - JavaScript PhoneGap bridge for extra utilities 
	 *
	 *
	*/

	var exec = require("cordova/exec");
	
	var wizUtils = {
	
	    getAppFileName: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getAppFileName", []);
	    },
	
	    getBundleVersion: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getBundleVersion", []);
	    },
	    
	    getBundleDisplayName: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getBundleDisplayName", []);
	    },
	    
	    getBundleIdentifier: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getBundleIdentifier", []);                      
	    },
	    
	    getDeviceHeight: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getDeviceHeight", []);                      
	    },
	        
	    getDeviceWidth: function(s) {
	        cordova.exec(s, null, "wizUtilsPlugin", "getDeviceWidth", []);                      
	    },
	    
	    setText: function(text, s, f) {
			cordova.exec(s, f, "wizUtilsPlugin", "setText", [text]);
		},
		
		getText: function(s, f) {
			cordova.exec(s, f, "wizUtilsPlugin", "getText", []);
		},
	    
	    restart: function(showSplashScreen) {
	    	if (showSplashScreen && !window.navigator.splashscreen) {
		    	console.error("splashscreen plugin is missing!");
		    	showSplashScreen = null;
	    	}
	        cordova.exec(null, null, "wizUtilsPlugin", "restart", [showSplashScreen]);
	    }
	
	};
	
	module.exports = wizUtils;
});