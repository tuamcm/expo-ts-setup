import React from "react";
import { useAppSelector } from "app/hooks";
import { authState } from "components/AuthComponent/authSlice";
import NormalStackScreens from "./screens/NormalStackScreens";
import AuthStackScreens from "./screens/AuthStackScreens";

const AuthNavigation: React.FC = () => {
  const { isLogged } = useAppSelector(authState);

  if (isLogged) {
    return <AuthStackScreens />;
  }

  return <NormalStackScreens />;
};

export default AuthNavigation;
