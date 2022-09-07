import React from "react";
import { useAppSelector } from "app/hooks";
import { authState } from "components/AuthComponent/authSlice";
import NormalStackScreens from "./screens/NormalStackScreens";
import AuthStackScreens from "./screens/AuthStackScreens";
import { AuthInterface } from "components/AuthComponent/authTypes";

const AuthNavigation = (): JSX.Element => {
  const { isLogged }: AuthInterface = useAppSelector<AuthInterface>(authState);

  if (isLogged) {
    return <AuthStackScreens />;
  }

  return <NormalStackScreens />;
};

export default AuthNavigation;
