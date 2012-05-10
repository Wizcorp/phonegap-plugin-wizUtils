/* WizUtils - For all your wizarding needs!
 *
 * @author Ally Ogilvie
 * @copyright WizCorp Inc. [ Incorporated Wizards ] 2011
 * @file WizUtils.h for PhoneGap
 *
 */ 

#import <Foundation/Foundation.h>
#ifdef CORDOVA_FRAMEWORK
#import <Cordova/CDVPlugin.h>
#else
#import "CDVPlugin.h"
#endif

@interface WizUtils : CDVPlugin {

}

- (void)getBundleVersion:(NSArray*)arguments withDict:(NSDictionary*)options;
- (void)getBundleIdentifier:(NSArray*)arguments withDict:(NSDictionary*)options;
- (void)getBundleDisplayName:(NSArray*)arguments withDict:(NSDictionary*)options;
- (void)getDeviceHeight:(NSArray*)arguments withDict:(NSDictionary*)options;
- (void)getDeviceWidth:(NSArray*)arguments withDict:(NSDictionary*)options;
+ (NSString*) stringWithUUID;
+ (NSString*) deviceId;

- (void)setSplashInBackground:(NSArray*)arguments withDict:(NSDictionary*)options;
@end
