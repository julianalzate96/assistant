import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './drawer';
import {StatusBar} from 'react-native';
import AuthStack from './Auth';
import {createStackNavigator} from '@react-navigation/stack';

export default function RootNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
