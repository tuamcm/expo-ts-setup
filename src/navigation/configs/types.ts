import { StyleProp, TextStyle } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: { userId: string } | undefined;
  Repo: undefined;
  Article: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type ColorsType = {
  active: string;
  inactive: string;
};

export type TabConfigsType = {
  iconActiveTintColor: string;
  iconInactiveTintColor: string;
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;
  tabBarLabelStyle: StyleProp<TextStyle>;
  tabBarBadgeStyle: StyleProp<TextStyle>;
};
