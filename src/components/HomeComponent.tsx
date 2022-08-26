import React from "react";
import { Text, View } from "react-native";

interface Props {
  name: string;
  age: number;
}

const HomeComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <View>
      <Text>HomeComponent</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>HomeComponent 3 5 6</Text>
    </View>
  );
};

export default HomeComponent;
