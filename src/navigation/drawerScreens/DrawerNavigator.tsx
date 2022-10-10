import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenuContent from "./components/DrawerMenuContent";
import {
  configsNavigator,
  configsScreenAuth,
} from "./components/DrawerConfigs";
import { HomeScreen, NotificationsScreen } from "./screens/DrawerScreens";
import DrawerAuthStackScreens from "./screens/DrawerAuthStackScreens";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (): JSX.Element => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerMenuContent {...props} />}
      screenOptions={({ navigation }) => {
        const options = configsNavigator(navigation);
        return {
          ...options,
        };
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Group screenOptions={configsScreenAuth}>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Auth" component={DrawerAuthStackScreens} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
