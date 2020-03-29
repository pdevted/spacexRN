import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Launches from '../screen/Launches';
import RocketDetails from '../screen/RocketDetails';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f5',
          }
        }}
      >
        <Stack.Screen name="Launches" component={Launches} />
        <Stack.Screen name="RockerDetails"
          component={RocketDetails} 
          options={{ title: 'Rocket Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator;
