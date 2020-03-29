import React from 'react';
import { StatusBar } from "react-native";
import RootNavigator from './components/navigation/RootNavigator';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar barStyle="default" />
    </>
  );
}
