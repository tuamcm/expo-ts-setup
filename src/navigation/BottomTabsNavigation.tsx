import React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeComponent from "components/HomeComponent";
import AuthStackScreens from "./screens/AuthStackScreens";
import { defaultTabBarOptions } from "./configs/helpers";

const showTabBarBadge = () => {
  return {
    tabBarBadge: "9+",
    tabBarBadgeStyle: { fontSize: 8 },
  };
};

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          ...defaultTabBarOptions("home"),
          ...showTabBarBadge(),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="red"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Article"
        component={AuthStackScreens}
        options={{
          ...defaultTabBarOptions("book"),
          headerShown: false,
          tabBarBadge: "4",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
