import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleComponent from "components/ArticleComponent";
import HomeComponent from "components/HomeComponent";
import RepoComponent from "components/RepoComponent/RepoComponent";
import { initRouteNameNotAuth } from "./configs/navi";
import { RootStackParamList } from "./configs/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={initRouteNameNotAuth}>
      <Stack.Screen
        name="Home"
        component={HomeComponent}
      />
      <Stack.Screen name="Article" component={ArticleComponent} />
      <Stack.Screen name="Repo" component={RepoComponent} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
