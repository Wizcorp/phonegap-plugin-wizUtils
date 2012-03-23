/* WizUtils - For all your wizarding needs!
 *
 * @author WizCorp Inc. [ Incorporated Wizards ] 
 * @copyright 2011
 * @file WizUtils.h for PhoneGap
 *
 */ 

#import <Foundation/Foundation.h>
#ifdef PHONEGAP_FRAMEWORK
#import <PhoneGap/PGPlugin.h>
#else
#import "PGPlugin.h"
#endif

@interface WizUtils : PGPlugin {

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
