import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from "components/HomeComponent";

const NormalStack = createNativeStackNavigator();

const NormalStackScreens = () => {
  return (
    <NormalStack.Navigator initialRouteName="Home">
      <NormalStack.Screen
        name="Home"
        component={HomeComponent}
        options={{
          title: "Hommy",
        }}
      />
    </NormalStack.Navigator>
  );
};

export default NormalStackScreens;
