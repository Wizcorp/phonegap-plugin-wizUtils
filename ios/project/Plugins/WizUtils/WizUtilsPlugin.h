/* WizUtils - For all your wizarding needs!
 *
 * @author Ally Ogilvie
 * @copyright Wizcorp Inc. [ Incorporated Wizards ] 2014
 * @file WizUtilsPlugin.h for PhoneGap
 *
 */ 

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

@interface WizUtilsPlugin : CDVPlugin

/**
 * This method returns app name as String.
 *
 */
- (void)getAppFileName:(CDVInvokedUrlCommand *)command;

/**
 * This method returns the bundle version as String.
 *
 */
- (void)getBundleVersion:(CDVInvokedUrlCommand *)command;

/**
 * This method returns the bundle identifier as String.
 * eg. this.is.the.format
 *
 */
- (void)getBundleIdentifier:(CDVInvokedUrlCommand *)command;

/**
 * This method returns the bundle display name as String.
 * i.e. The text under the icon on the home screen
 *
 */
- (void)getBundleDisplayName:(CDVInvokedUrlCommand *)command;

/**
 * This method returns the real maximum device height as int.
 *
 */
- (void)getDeviceHeight:(CDVInvokedUrlCommand *)command;

/**
 * This method returns the real maximum device width as int.
 *
 */
- (void)getDeviceWidth:(CDVInvokedUrlCommand *)command;

/**
 * This method stores text to the OS clipboard.
 *
 */
-(void)setText:(CDVInvokedUrlCommand *)command;

/**
 * This method returns text stored on the OS clipboard.
 *
 */
-(void)getText:(CDVInvokedUrlCommand *)command;

/**
 * This method refreshed the main UIWebView.
 *
 */
-(void)restart:(CDVInvokedUrlCommand *)command;

@end
