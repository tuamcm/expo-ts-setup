import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { defaultTabBarOptions } from "./configs/helpers";
import CartScreen from "screens/CartScreen/CartScreen";
import TabStackScreens from "./MainTabScreens/TabStackScreens";
import FavoriteStackScreens from "./MainTabScreens/FavoriteStackScreens";
import UserScreen from "screens/UserScreen/UserScreen";
import { Center } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { HomeClearAllCart, homeState } from "screens/HomeScreen/HomeSlice";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";

// const showTabBarBadge = () => {
//   return {
//     tabBarBadge: "9+",
//     tabBarBadgeStyle: { fontSize: 8 },
//   };
// };

const Tab = createBottomTabNavigator();

const MainTabsNavigation = () => {
  const dispatch = useAppDispatch();
  const { cart }: HomeInterface = useAppSelector<HomeInterface>(homeState);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shoes LX"
        component={TabStackScreens}
        options={{
          ...defaultTabBarOptions("home-outline"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteStackScreens}
        options={{
          ...defaultTabBarOptions("heart-outline"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          ...defaultTabBarOptions("cart-outline"),
          headerRight: () => {
            return cart.length > 0 ? (
              <Center px={2}>
                <TouchableOpacity onPress={() => dispatch(HomeClearAllCart())} >
                  <MaterialCommunityIcons
                    name="delete"
                    size={28}
                    color="gray"
                  />
                </TouchableOpacity>
              </Center>
            ) : null;
          },
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={UserScreen}
        options={{
          ...defaultTabBarOptions("settings-outline"),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainTabsNavigation;
