/* WizUtils - For all your wizarding needs!
 *
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file WizUtils.h for PhoneGap
 *
 */ 

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface WizUtils : CDVPlugin

- (void)getAppFileName:(CDVInvokedUrlCommand*)command;
- (void)getBundleVersion:(CDVInvokedUrlCommand*)command;
- (void)getBundleIdentifier:(CDVInvokedUrlCommand*)command;
- (void)getBundleDisplayName:(CDVInvokedUrlCommand*)command;
- (void)getDeviceHeight:(CDVInvokedUrlCommand*)command;
- (void)getDeviceWidth:(CDVInvokedUrlCommand*)command;

-(void)setText:(CDVInvokedUrlCommand*)command;
-(void)getText:(CDVInvokedUrlCommand*)command;

-(void)restart:(CDVInvokedUrlCommand*)command;

@end
