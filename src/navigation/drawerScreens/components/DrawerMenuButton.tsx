import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { propsHeaderLeft } from "./DrawerConfigs";

const DrawerMenuButton = ({
  navigation,
  values,
}: {
  navigation: any;
  values: propsHeaderLeft;
}): JSX.Element => {
  const toggleDrawer = (): void => {
    console.log("[DrawerMenuButton] ");
    console.log("[DrawerMenuButton] values", values);
    console.log(navigation.getId());
    
    navigation.toggleDrawer();
  };

  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <Ionicons
        name="menu"
        size={30}
        color="gray"
        style={{
          marginLeft: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default DrawerMenuButton;
