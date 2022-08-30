import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "navigation/configs/types";

const HomeComponent: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      console.log(">>> HomeComponent <<<");
      
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text>HomeComponent</Text>
      <Text>Name: {"name"}</Text>
      <Text>Age: {"age"}</Text>
      <Text>HomeComponent 3 5 6</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Repo")}
        style={{ padding: 20, backgroundColor: "#ffddee", width: "50%" }}
      >
        <Text>Go to Repo </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeComponent;
