import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleComponent from "components/ArticleComponent";
import RepoComponent from "components/RepoComponent/RepoComponent";
import CameraComponent from "camera/CameraComponent";

const AuthStack = createNativeStackNavigator();

const AuthStackScreens = (): JSX.Element => {
  return (
    <AuthStack.Navigator initialRouteName="Article">
      <AuthStack.Screen
        name="Article"
        component={ArticleComponent}
        options={{
          title: "Article FDX",
          headerTitleStyle: { fontFamily: "Inter_900Black" },
        }}
      />
      <AuthStack.Screen
        name="Repo"
        component={RepoComponent}
        options={{
          title: "My Repo",
          headerTitleStyle: { fontFamily: "Inter_900Black" },
        }}
      />
      <AuthStack.Screen
        name="Camera"
        component={CameraComponent}
        options={{
          title: "My Camera",
          headerTitleStyle: { fontFamily: "Inter_900Black" },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
