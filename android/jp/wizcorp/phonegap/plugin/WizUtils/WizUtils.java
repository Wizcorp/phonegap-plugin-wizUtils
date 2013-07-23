package jp.wizcorp.phonegap.plugin.WizUtils;

import jp.wizcorp.android.shell.AndroidShellActivity;
import jp.wizcorp.android.shell.R;

import org.json.JSONArray;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;

/**
 * 
 * @author WizCorp Inc. [ Incorporated Wizards ] 
 * @copyright 2012
 * @file WizUtils for PhoneGap
 *
 */
public class WizSpinnerPlugin extends CordovaPlugin {

	/*
	 * 
	 * JavaScript Usage ->
	 * s is success callback
	 * f is fail callback
	 * 
	 * var WizUtils { 
	 * 
	 * 		getBundleVersion : function (s) {
	 *			return PhoneGap.exec( s, null, 'WizUtils', 'getBundleVersion', [] );	
	 *		}
	 * 
	 * }
	 * 
	 * 
	 * 
	 */
	
	private String TAG = "WizUtils";

	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		if (action.equals("getBundleVersion")) {
			
			String bundleVersion = "1.0";//(String) cordova.getActivity().getResources().getText(R.string.bundle_version);
			callbackContext.success(bundleVersion);
			return true;
			
		} else if (action.equals("getBundleDisplayName")) {

			String appName = (String) cordova.getActivity().getResources().getText(R.string.app_name);
			callbackContext.success(appName);
			return true;
			
		} else if (action.equals("getBundleIdentifier")) {

			try {
				
				PackageManager manager = cordova.getActivity().getPackageManager();
				PackageInfo info = manager.getPackageInfo(cordova.getActivity().getPackageName(), 0);
				   
				String identifier = info.packageName;
				callbackContext.success(identifier);
				return true;
			
			} catch (Exception e) {
				
				String noIdentifier = null;			
				callbackContext.success(noIdentifier);
				return true;
			}
			
		} else if (action.equals("getDeviceHeight")) {

			int appHeight = AndroidShellActivity.getHeight();
			callbackContext.success(appHeight);
			return true;
			
		} else if (action.equals("getDeviceWidth")) {

			int appWidth = AndroidShellActivity.getWidth();
			callbackContext.success(appWidth);
			return true;
			
		} else if (action.equals("setSplashInBackground")) {

			// TODO: complete this API
			callbackContext.success();
			return true;
			
		}
		
		return false;
	}
	
}
