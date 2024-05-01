import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AccountScreen } from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Account" 
          component={AccountScreen} 
          options={{ title: "Mi cuenta"}}
        />
    </Stack.Navigator>
  )
}

export {AccountNavigation}