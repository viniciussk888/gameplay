import React from "react";
import { StatusBar } from "react-native";

import { Signin } from "./src/screens/Signin";
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Signin />
    </>
  );
}
