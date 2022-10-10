import { DrawerNavigationOptions } from "@react-navigation/drawer";
import DrawerMenuButton from "./DrawerMenuButton";

export interface propsHeaderLeft {
  tintColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  labelVisible?: boolean;
}

export const configsNavigator = (navigation: any): DrawerNavigationOptions => {
  return {
    headerTintColor: "#fff", //Set Header text color
    headerStyle: {
      backgroundColor: "#f4511e", //Set Header color
    },
    headerTitleStyle: {
      fontWeight: "bold", //Set Header text style
    },
    drawerType: "back",
    drawerActiveBackgroundColor: "green",
    drawerActiveTintColor: "white",
    drawerLabelStyle: {
      fontSize: 20,
      color: "orange"
    },
    drawerItemStyle: {
      borderRadius: 40,
      marginHorizontal: 10,
      paddingLeft: 20,
    },
    headerLeft: (values: propsHeaderLeft) => {
      return <DrawerMenuButton navigation={navigation} values={values} />
    },
  };
};

export const configsScreenAuth: DrawerNavigationOptions = {
  headerShown: false,
  drawerActiveBackgroundColor: "blue",
};
