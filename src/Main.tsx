import { View, Text } from "react-native";
import React from "react";
import HomeComponent from "components/HomeComponent";

const Main: React.FC = () => {
  return (
    <View>
      <Text>Main 333 444</Text>
      <HomeComponent name="Alex" age={26} />
    </View>
  );
};

export default Main;
