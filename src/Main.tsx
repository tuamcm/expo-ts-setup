import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import {
  Roboto_300Light,
  Roboto_100Thin_Italic,
} from "@expo-google-fonts/roboto";
import AuthNavigation from "navigation/AuthNavigation";
// import BottomTabsNavigation from "navigation/BottomTabsNavigation";
// import MainNavigation from "navigation/MainNavigation";

// Disable auto hide splash screen
// We should hide splash screen after we have loaded all resource what the app need to run
// Can not use inside the function, it won't work
SplashScreen.preventAutoHideAsync();

const prefix = Linking.createURL("/");

const customFonts = {
  "Combo-Regular": require("./../assets/fonts/Combo-Regular.ttf"),
  "DancingScript-Regular": require("./../assets/fonts/DancingScript-Regular.ttf"),
};

const importFonts = {
  Inter_900Black,
  Roboto_300Light,
  Roboto_100Thin_Italic,
};

const Main = () => {
  const linking = {
    prefixes: [prefix],
  };

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(importFonts);

        // Load custom fonts
        await Font.loadAsync(customFonts);

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const hideSplashScreen = async () => {
    console.log("-- onReady NavigationContainer -- ");
    // wait for NavigationContainer effect
    await new Promise((resolve) => setTimeout(resolve, 200));
    // hide the splash screen
    await SplashScreen.hideAsync();
  };

  // We don't show anything when the app is not ready
  // Because the navigation will run before the app load full resources such as font
  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer linking={linking} onReady={hideSplashScreen}>
      <AuthNavigation />
      {/* <BottomTabsNavigation /> */}
      {/* <MainNavigation /> */}
    </NavigationContainer>
  );
};

export default Main;
