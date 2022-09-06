import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "navigation/configs/types";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { AuthPending, authState } from "./AuthComponent/authSlice";

const ArticleComponent: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { loading, data, error } = useAppSelector(authState);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log("useFocusEffect - focused");

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log("useFocusEffect - unfocused");
      };
    }, [])
  );

  const handlePressApiGraphql = () => {
    console.log(">>> handlePressApiGraphql >>>");
    dispatch(AuthPending());
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "Roboto_100Thin_Italic",
          fontSize: 22,
          padding: 20,
          color: "red",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Repo")}
        style={{ padding: 20, backgroundColor: "#ffddee", width: "50%" }}
      >
        <Text style={{ fontFamily: "Combo-Regular" }}>Go to Repo </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ padding: 20, backgroundColor: "#dcefee", width: "70%" }}
      >
        <Text style={{ fontFamily: "Roboto_300Light" }}>Go to Home </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePressApiGraphql}
        style={{ padding: 20, backgroundColor: "#cdcdcd", width: "100%" }}
      >
        <Text style={{ fontFamily: "DancingScript-Regular" }}>Call API Graphql </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleComponent;
