import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "navigation/configs/types";

const ArticleComponent: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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

  return (
    <View>
      <Text>ArticleComponent</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Repo")}
        style={{ padding: 20, backgroundColor: "#ffddee", width: "50%" }}
      >
        <Text>Go to Repo </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ padding: 20, backgroundColor: "#dcefee", width: "70%" }}
      >
        <Text>Go to Home </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleComponent;
