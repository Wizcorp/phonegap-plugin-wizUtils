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
            cordova.exec(s, null, "WizUtilsPlugin", "getAppFileName", []);
        },

        getBundleVersion: function(s) {
            cordova.exec(s, null, "WizUtilsPlugin", "getBundleVersion", []);
        },

        getBundleDisplayName: function(s) {
            cordova.exec(s, null, "WizUtilsPlugin", "getBundleDisplayName", []);
        },

        getBundleIdentifier: function(s) {
            cordova.exec(s, null, "WizUtilsPlugin", "getBundleIdentifier", []);                      
        },

        getDeviceHeight: function(s) {
            cordova.exec(s, null, "WizUtilsPlugin", "getDeviceHeight", []);                      
        },

        getDeviceWidth: function(s) {
            cordova.exec(s, null, "WizUtilsPlugin", "getDeviceWidth", []);                      
        },

        setText: function(text, s, f) {
            cordova.exec(s, f, "WizUtilsPlugin", "setText", [text]);
        },

        getText: function(s, f) {
            cordova.exec(s, f, "WizUtilsPlugin", "getText", []);
        },

        restart: function(showSplashScreen) {
            if (showSplashScreen && !window.navigator.splashscreen) {
                console.error("splashscreen plugin is missing!");
                showSplashScreen = null;
            }
            cordova.exec(null, null, "WizUtilsPlugin", "restart", [showSplashScreen]);
        }

    };

    module.exports = wizUtils;
});