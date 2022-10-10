import React from "react";
import { useAppSelector } from "app/hooks";
import { authState } from "components/AuthComponent/authSlice";
import NormalStackScreens from "./screens/NormalStackScreens";
import { AuthInterface } from "components/AuthComponent/authTypes";
import DrawerNavigator from "./drawerScreens/DrawerNavigator";

const DrawerNavigation = (): JSX.Element => {
  const { isLogged }: AuthInterface = useAppSelector<AuthInterface>(authState);

  if (isLogged) {
    return <DrawerNavigator />;
  }

  return <NormalStackScreens />;
};

export default DrawerNavigation;
