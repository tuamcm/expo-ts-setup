import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleComponent from "components/ArticleComponent";
import RepoComponent from "components/RepoComponent/RepoComponent";

const AuthStack = createNativeStackNavigator();

const AuthStackScreens = () => {
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
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
