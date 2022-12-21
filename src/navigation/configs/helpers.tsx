import { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, TabBarIcon, tabConfigs } from "./navi";

// extracting types of props on a component
type IoniconsName = ComponentProps<typeof Ionicons>["name"];

export const showTabIcon = (
  { focused, color, size }: TabBarIcon,
  iconName: IoniconsName
): React.ReactNode | undefined => {
  let myColor = tabConfigs.iconInactiveTintColor;
  if (focused) {
    myColor = tabConfigs.iconActiveTintColor;
  }

  return <Ionicons name={iconName} size={size} color={myColor} />;
};

export const defaultTabBarOptions = (iconName: IoniconsName) => ({
  tabBarIcon: ({ focused, color, size }: TabBarIcon) =>
    showTabIcon({ focused, color, size }, iconName),
  tabBarActiveTintColor: colors.active,
  tabBarInactiveTintColor: colors.inactive,
  tabBarLabelStyle: tabConfigs.tabBarLabelStyle,
  tabBarBadgeStyle: tabConfigs.tabBarBadgeStyle,
  tabBarShowLabel: false,
  headerTintColor: "#000", //Set Header text color
  // headerStyle: {
  //   backgroundColor: colors.active, //Set Header color
  // },
});
