import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PokedexScreen } from '../screens/PokedexScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name='Pokedex' 
          component={PokedexScreen} 
          options={{ title: "", headerTransparent: true}}
        />
        <Stack.Screen 
          name='Pokemon' 
          component={PokemonScreen} 
          options={{ title: "", headerTransparent: true}} 
        />
    </Stack.Navigator>
  )
}

export {PokedexNavigation}