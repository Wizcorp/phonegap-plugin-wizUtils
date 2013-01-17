using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

using System.Windows;
using System.Reflection;
using System.Xml.Linq;
using System.Linq;

namespace Cordova.Extension.Commands
{
    class WizUtils : BaseCommand
    {
        /// <summary>
        /// Gets an attribute from the Windows Phone WMAppManifest.xml file
        /// To use this method, add a reference to the System.Xml.Linq DLL
        /// </summary>
        /// <param name="attributeName">The attribute to read</param>
        /// <returns>The Attribute's Value</returns>
        private static string GetWinPhoneAttribute(string attributeName)
        {
            string ret = string.Empty;

            try
            {
                XElement xe = XElement.Load("WMAppManifest.xml");
                var attr = (from manifest in xe.Descendants("App")
                            select manifest).SingleOrDefault();
                if (attr != null)
                    ret = attr.Attribute(attributeName).Value;
            }
            catch
            {
                // Ignore errors in case this method is called
                // from design time in VS.NET
            }

            return ret;
        }

        public void getAppFileName(string options)
        {
            // TODO: Figure out how to implement this correctly.
            //       Possibly using Windows.ApplicationModel.PackageId if it ever gets enabled for WP8
            Assembly assembly = Assembly.GetExecutingAssembly();
            AssemblyName assemblyName = new AssemblyName(assembly.FullName);
            string filename = assemblyName.Name + ".xap"; // TODO: Fix this to be correct
            var myPackage = Windows.ApplicationModel.Package.Current;
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, filename));
        }

        public void getBundleVersion(string options)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, GetWinPhoneAttribute("Version")));
        }

        public void getBundleDisplayName(string options)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, GetWinPhoneAttribute("Title")));
        }

        public void getBundleIdentifier(string options)
        {
            // TODO: For WP8, it is not clear what the bundle identifier should be.  Perhaps this is the
            //       Product ID for the app or the namespace for the application.  For now we use Product ID.
            string bundleID = GetWinPhoneAttribute("ProductID");
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, bundleID));
        }

        public void getDeviceHeight(string options)
        {
            // Run on UI thread.
            Deployment.Current.Dispatcher.BeginInvoke(() =>
                {
                    // TODO: Confirm use of Current.RootVisual.RenderSize is OK
                    // MS recommends the 'ScaleFactor' solution here:
                    //      http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj206974(v=vs.105).aspx
                    // Another solution that seems to work is to use:  Application.Current.Host.Content.ActualHeight
                    object height = (int)Application.Current.RootVisual.RenderSize.Height;
                    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, height));
                });
        }

        public void getDeviceWidth(string options)
        {
            // Run on UI thread.
            Deployment.Current.Dispatcher.BeginInvoke(() =>
            {
                // TODO: Confirm use of Current.RootVisual.RenderSize is OK
                // MS recommends the 'ScaleFactor' solution here:
                //      http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj206974(v=vs.105).aspx
                // Another solution that seems to work is to use:  Application.Current.Host.Content.ActualWidth
                object width = (int)Application.Current.RootVisual.RenderSize.Width;
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK, width));
            });
        }

        public void setText(string options)
        {
            // Run on UI thread.
            Deployment.Current.Dispatcher.BeginInvoke(() =>
            {
                string text = JsonHelper.Deserialize<string[]>(options)[0];
                System.Windows.Clipboard.SetText(text);
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK, text));
            });
        }

        public void getText(string options)
        {
            // Run on UI thread.
            Deployment.Current.Dispatcher.BeginInvoke(() =>
            {
                // TODO: Determine if there is a way to get the clipboard text on WP8 that doesn't trigger a security exception
                //string text = System.Windows.Clipboard.GetText();
                System.Diagnostics.Debug.WriteLine("Warning -- Windows Phone 8 does not support getText from Clipboard");
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
            });
        }

        public void restart(string options)
        {
            // If the show splash parameter was specified, use that to decide to show the splash screen.
            // Otherwise, use the AutoHideSplashScreen from the config.xml to decide.
            string showSplashScreen = JsonHelper.Deserialize<string[]>(options)[0];
            bool show = false;
            if (showSplashScreen != null)
            {
                show = showSplashScreen.Equals("true");
            }
            else
            {
                // TODO: Read this value from some configuration file for WP8
                //show = AutoHideSplashScreen
            }

            // TODO: Figure out how to show the splash screen (not supported in Cordova 2.3 for WP8)

            // Note: Cordova 2.3 generates a System.NotSupportedException in Unknown Module any time the page is loaded.
            //       This exception is generated when an app is first launched (i.e. the page is first loaded) and
            //       it happens when the page is reloaded due to to the following line.  This also happens if the reload
            //       is triggered directly in JS. Hopefully this exception will be fixed in the next version of Cordova.  
            InvokeCustomScript(new ScriptCallback("execScript", new string[] { "location.reload(false);" }), true);
        }
    }
}
