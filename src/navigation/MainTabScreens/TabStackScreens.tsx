import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "screens/HomeScreen/HomeScreen";
import DetailScreen from "screens/DetailScreen/DetailScreen";
import CartIcon from "layout/CartQuantityItem/CartIcon";

const TabStack = createNativeStackNavigator();

const TabStackScreens = (): JSX.Element => {

  return (
    <TabStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <CartIcon />,
      }}
    >
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Detail" component={DetailScreen} />
    </TabStack.Navigator>
  );
};

export default TabStackScreens;
