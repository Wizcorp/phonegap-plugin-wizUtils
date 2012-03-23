/* WizUtils for PhoneGap - For all your wizarding needs!
*
 * @author WizCorp Inc. [ Incorporated Wizards ] 
 * @copyright 2011
 * @file - wizUtils.js
 * @about - JavaScript PhoneGap bridge for extra utilities 
 *
 *
*/




var wizUtils = {

    getBundleVersion: function(s) {
        return PhoneGap.exec(s, null, "WizUtils", "getBundleVersion", []);
    },
    
    getBundleDisplayName: function(s) {
        return PhoneGap.exec(s, null, "WizUtils", "getBundleDisplayName", []);
    },
    
    getBundleIdentifier: function(s) {
        return PhoneGap.exec(s, null, "WizUtils", "getBundleIdentifier", []);                      
    },
    
    getDeviceHeight: function(s) {
        return PhoneGap.exec(s, null, "WizUtils", "getDeviceHeight", []);                      
    },
        
    getDeviceWidth: function(s) {
        return PhoneGap.exec(s, null, "WizUtils", "getDeviceWidth", []);                      
    },
    
    setSplashInBackground: function(bool) {
        return PhoneGap.exec(null, null, "WizUtils", "setSplashInBackground", [bool]);
    }
    

	
};