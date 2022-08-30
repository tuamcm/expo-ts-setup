import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import AuthNavigation from "navigation/AuthNavigation";
// import BottomTabsNavigation from "navigation/BottomTabsNavigation";
// import MainNavigation from "navigation/MainNavigation";

const prefix = Linking.createURL("/");

const Main: React.FC = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking}>
      <AuthNavigation />
      {/* <BottomTabsNavigation /> */}
      {/* <MainNavigation /> */}
    </NavigationContainer>
  );
};

export default Main;
