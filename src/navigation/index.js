import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from "./drawer"
import { StatusBar } from 'react-native';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1a6844" />
      <Drawer />
    </NavigationContainer>
  );
}
