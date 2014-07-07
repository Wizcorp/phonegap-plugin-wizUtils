cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "phonegap/plugin/wizUtils/wizUtils.js",
        "id": "jp.wizcorp.phonegap.plugin.wizUtilsPlugin.wizUtilsPlugin",
        "clobbers": [
            "window.wizUtils"
        ]
    }];
});