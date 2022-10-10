import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

const DrawerMenuContent = (props: DrawerContentComponentProps): JSX.Element => {
  console.log("[DrawerMenuContent]");
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text>Test</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
        style={{
          borderColor: "red"
        }}
        labelStyle={{
          fontSize: 20
        }}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerMenuContent;
