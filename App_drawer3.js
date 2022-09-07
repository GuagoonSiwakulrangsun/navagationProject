import React from 'react';

import { Text, View, Button, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';
 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,
         DrawerContentScrollView,
         DrawerItemList,
         DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)'
  }
}

function NotificationScreen(){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex:1}}>
      <Image style={styles.sideMenuProfileIcon}
             source={require('./assets/react_logo.png')}/>  
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem
          label='Close Drawer'
          onPress={() => props.navigation.closeDrawer()} />
      </DrawerContentScrollView>
    </SafeAreaView>

  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent{...props}/>}
      screenOptions={{
        drawerStyle:{
          width:240
        }
      }}>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Notifications' component={NotificationScreen}/>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100/2,
    alignSelf: 'center',
  },
})
