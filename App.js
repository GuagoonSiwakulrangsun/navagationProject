import { View, Text, Button } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

function HomeScreen({navigation}){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home !</Text>
      <Button title='Go To setting' onPress={()=> navigation.navigate('Settings')}/>
    </View>
  )
}

function SettingScreen({navigation}){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting !</Text>
      <Button title='Go To Home' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Settings' component={SettingScreen}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}

export default App