/* WizUtils for PhoneGap - For all your wizarding needs!
*
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file - wizUtils.js
 * @about - JavaScript PhoneGap bridge for extra utilities 
 *
 *
*/




var wizUtils = {

    getBundleVersion: function(s) {
        return cordova.exec(s, null, "WizUtils", "getBundleVersion", []);
    },
    
    getBundleDisplayName: function(s) {
        return cordova.exec(s, null, "WizUtils", "getBundleDisplayName", []);
    },
    
    getBundleIdentifier: function(s) {
        return cordova.exec(s, null, "WizUtils", "getBundleIdentifier", []);                      
    },
    
    getDeviceHeight: function(s) {
        return cordova.exec(s, null, "WizUtils", "getDeviceHeight", []);                      
    },
        
    getDeviceWidth: function(s) {
        return cordova.exec(s, null, "WizUtils", "getDeviceWidth", []);                      
    },
    
    setSplashInBackground: function(bool) {
        return cordova.exec(null, null, "WizUtils", "setSplashInBackground", [bool]);
    },
    
    setText: function(text, s, f) {
		return cordova.exec(s, f, "WizUtils", "setText", [text]);
	},
	
	getText: function(s, f) {
		return cordova(s, f, "WizUtils", "getText", []);
	}
    

	
};