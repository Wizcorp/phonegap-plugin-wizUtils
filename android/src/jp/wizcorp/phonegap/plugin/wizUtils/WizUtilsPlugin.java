package jp.wizcorp.phonegap.plugin.wizUtils;

import android.app.Activity;
import android.content.pm.ApplicationInfo;
import android.view.Display;

import android.webkit.WebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import java.io.File;

/**
 * 
 * @author Wizcorp Inc. [ Incorporated Wizards ] Copyright 2014
 * file WizUtilsPlugin.java for PhoneGap
 *
 */
public class WizUtilsPlugin extends CordovaPlugin {

    private Activity act;
    private WebView _webView;

    @Override
    public void initialize(org.apache.cordova.CordovaInterface cordova, org.apache.cordova.CordovaWebView webView) {
        act = cordova.getActivity();
        _webView = webView;
        super.initialize(cordova, webView);
    }

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		if (action.equals("getAppFileName")) {
            String label = "(unknown)";
            PackageManager pm = act.getPackageManager();
            try {
                ApplicationInfo ai = pm.getApplicationInfo(act.getPackageName(), 0);
                String fullDir = ai.publicSourceDir;
                label = fullDir.split(File.separator)[fullDir.split(File.separator).length - 1];
            } catch (PackageManager.NameNotFoundException e) {
            }
            callbackContext.success(label);
			return true;
			
		} else if (action.equals("getBundleVersion")) {
            PackageInfo pInfo = null;
            try {
                pInfo = act.getPackageManager().getPackageInfo(act.getPackageName(), 0);
            } catch (PackageManager.NameNotFoundException e) {
            }
            String bundleVersion = "0";
            if (pInfo != null) {
                bundleVersion = pInfo.versionName;
            }
            callbackContext.success(bundleVersion);
            return true;

        } else if (action.equals("getBundleDisplayName")) {
            PackageManager pm = act.getApplicationContext().getPackageManager();
            ApplicationInfo ai;
            try {
                ai = pm.getApplicationInfo( act.getPackageName(), 0);
            } catch (PackageManager.NameNotFoundException e) {
                ai = null;
            }
            // If unknown we set to "(unknown)"
            String applicationName = (String) (ai != null ? pm.getApplicationLabel(ai) : "(unknown)");
            callbackContext.success(applicationName);
            return true;

        } else if (action.equals("getBundleIdentifier")) {

            String identifier;
            try {
                PackageManager manager = act.getPackageManager();
                PackageInfo info = manager.getPackageInfo(act.getPackageName(), 0);
                identifier = info.packageName;
            } catch (Exception e) {
                identifier = null;
            }

            callbackContext.success(identifier);
            return true;

        } else if (action.equals("getDeviceHeight")) {

            Display mDisplay = act.getWindowManager().getDefaultDisplay();
            int appHeight = mDisplay.getHeight();
            callbackContext.success(appHeight);
            return true;

        } else if (action.equals("getDeviceWidth")) {

            Display mDisplay = act.getWindowManager().getDefaultDisplay();
            int appWidth = mDisplay.getWidth();
            callbackContext.success(appWidth);
            return true;

        } else if (action.equals("restart")) {

            // TODO: check for displaying the splash screen
            act.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    _webView.reload();
                }
            });
            return true;
        }
		return false;
	}
}
