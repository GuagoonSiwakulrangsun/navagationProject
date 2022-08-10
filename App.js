import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='First Page'
        screenOptions={{
          headerStyle:{backgroundColor: 'tomato'},
          headerTintColor:'#ffff',
          headerTitleStyle:{fontWeight: 'bold' ,fontSize:20}
        }}>
        <Stack.Screen name='1st' component={FirstScreen}/>
        <Stack.Screen name='2nd' component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


