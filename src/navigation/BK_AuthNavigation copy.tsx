import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "app/hooks";
import ArticleComponent from "components/ArticleComponent";
import { authState } from "components/AuthComponent/authSlice";
import HomeComponent from "components/HomeComponent";
import RepoComponent from "components/RepoComponent/RepoComponent";
import { initRouteNameAuth, initRouteNameNotAuth } from "./configs/navi";
import { RootStackParamList } from "./configs/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigation: React.FC = () => {
  const { isLogged } = useAppSelector(authState);

  return (
    <Stack.Navigator
      initialRouteName={!isLogged ? initRouteNameNotAuth : initRouteNameAuth}
    >
      {!isLogged ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeComponent}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Article" component={ArticleComponent} />
          <Stack.Screen name="Repo" component={RepoComponent} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
