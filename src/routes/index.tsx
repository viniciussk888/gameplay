import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import { useAuth } from '../hooks/auth';

import { SignIn } from "../screens/Signin";
import { AppRoutes } from "./app.routes";

export function Routes() {
  // const { user } = useAuth();
  const logado = true;

  return (
    <NavigationContainer>
      {logado ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
