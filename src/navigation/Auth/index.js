import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../views/Login';
import Register from '../../views/Register';
import ResetPassword from '../../views/ResetPassword';
import {StatusBar} from 'react-native';
import Loading from '../../components/loading/loading';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </>
  );
}
