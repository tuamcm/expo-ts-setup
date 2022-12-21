import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "screens/DetailScreen/DetailScreen";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "navigation/configs/navi";
import { CartScreenNavigationProp } from "./TabTypes";
import { useNavigation } from "@react-navigation/native";
import FavouriteScreen from "screens/FavouriteScreen/FavouriteScreen";
import CartIcon from "layout/CartQuantityItem/CartIcon";

const TabStack = createNativeStackNavigator();

const FavoriteStackScreens = (): JSX.Element => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  return (
    <TabStack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerRight: () => <CartIcon />,
      }}
    >
      <TabStack.Screen name="Favorite" component={FavouriteScreen} />
      <TabStack.Screen name="Detail" component={DetailScreen} />
    </TabStack.Navigator>
  );
};

export default FavoriteStackScreens;
