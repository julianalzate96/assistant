import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Documents from '../../views/Document/documents';

const Stack = createStackNavigator();

export default function CommonStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="documents" component={Documents} />
    </Stack.Navigator>
  );
}
