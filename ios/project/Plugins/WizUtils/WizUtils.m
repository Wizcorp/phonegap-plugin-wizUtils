/* WizUtils - For all your wizarding needs!
 *
 * @author WizCorp Inc. [ Incorporated Wizards ] 
 * @copyright 2011
 * @file WizUtils.m for PhoneGap
 *
 */ 

#import "WizUtils.h"
#import "WizDebugLog.h"

@interface WizUtils ()
@property (nonatomic, readwrite, assign) UIWebView *theWebView;
@end

@implementation WizUtils

- (void)dealloc
{
    self.theWebView = nil;
    [super dealloc];
}

-(CDVPlugin *) initWithWebView:(UIWebView *)theWebView
{
    self = (WizUtils *)[super initWithWebView:theWebView];
    self.theWebView = theWebView;
    
    return self;
}


- (void)getDeviceHeight:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getDeviceHeight ");
    
    CGRect screenRect = [[UIScreen mainScreen] bounds];
    int _height = screenRect.size.height;
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:_height];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}


- (void)getDeviceWidth:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getDeviceWidth ");
    
    CGRect screenRect = [[UIScreen mainScreen] bounds];
    int _width = screenRect.size.width;
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:_width];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}

- (void)getAppFileName:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getAppFileName ");
    
    // Get the main bundle for the app.
    NSDictionary *infoDict = [[NSBundle mainBundle] infoDictionary];
    
    // Get app string
    NSString *appName = [NSString stringWithFormat:@"%@.app", [infoDict objectForKey:@"CFBundleExecutable"]];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appName];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
}

- (void)getBundleVersion:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getBundleVersion ");
    
    // Get the main bundle for the app.
    NSDictionary *infoDict = [[NSBundle mainBundle] infoDictionary];
    
    // Get version string
    NSString *ver = [infoDict objectForKey:@"CFBundleVersion"];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:ver];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
    
}

- (void)getBundleIdentifier:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getBundleIdentifier ");
    
    // Get bundle identifier string
    NSString *bundleIdent = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:bundleIdent];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}

- (void)getBundleDisplayName:(CDVInvokedUrlCommand*)command {
    WizLog(@"[WizUtils] ******* getBundleDisplayName ");
    
    // Get display name string
    NSString *dispName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:dispName];
    
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}


-(void)setText:(CDVInvokedUrlCommand*)command {
	
    // get text parameter
    NSString *text = [command.arguments objectAtIndex:0];
    
    // store the text
	[[UIPasteboard generalPasteboard] setValue:text forPasteboardType:@"public.utf8-plain-text"];
    
    // keep open the callback
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:text];
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}

-(void)getText:(CDVInvokedUrlCommand*)command {
    
    // get the text from pasteboard
	NSString *text = [[UIPasteboard generalPasteboard] valueForPasteboardType:@"public.utf8-plain-text"];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:text];
    [self writeJavascript: [pluginResult toSuccessCallbackString:command.callbackId]];
    
}

-(void)restart:(CDVInvokedUrlCommand*)command
{
    // If the show splash parameter was specified, use that to decide to show the splash screen.
    // Otherwise, use the AutoHideSplashScreen from the Cordova.plist to decide.
    NSNumber *showSplashScreen = [command.arguments objectAtIndex:0];
    BOOL show = NO;

    if ( ![showSplashScreen isEqual:[NSNull null]] ) {
        show = [showSplashScreen boolValue];
    } else {
        // Path to the Cordova.plist (in the application bundle)
        NSString *path = [[NSBundle mainBundle] pathForResource:
                          @"Cordova" ofType:@"plist"];
        
        // Build dictionary from the plist
        NSMutableDictionary *cordovaConfig = [NSMutableDictionary dictionaryWithContentsOfFile:path];
        show  = [[cordovaConfig objectForKey:@"AutoHideSplashScreen"] boolValue];
    }

    if ( show ) {
        // Show splash before reload
        NSString *jsString = @"cordova.exec(null, null, 'SplashScreen', 'show', []);";
        [self.theWebView stringByEvaluatingJavaScriptFromString:jsString];

        // Perform reload a second later as this gives time for our JS method to execute splash
        [self.theWebView performSelector:@selector(reload) withObject:nil afterDelay:1.0f];
    } else {
        // Perform reload immediately
        [self.theWebView reload];
    }
}

@end