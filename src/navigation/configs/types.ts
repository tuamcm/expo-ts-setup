import { StyleProp, TextStyle } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from '@react-navigation/native';
import { CameraCapturedPicture } from "expo-camera";

export type RootStackParamList = {
  Home: undefined;
  Repo: undefined;
  Article: { photo: CameraCapturedPicture } | undefined;
  Camera: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type CameraScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Camera"
>;

export type ArticleRouteProp = RouteProp<
  RootStackParamList,
  "Article"
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
