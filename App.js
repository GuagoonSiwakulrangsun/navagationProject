import { View, Text, Button } from "react-native";
import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from './screens/HomeScreen';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)'
  }
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontWeight: 'bold', color: '#5CB3FF', marginBottom: 5}}>Setting !</Text>
      <Button
        title="Go To Home"
        color="#5CB3FF"
        onPress={() => navigation.goBack()} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon:({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-outline" : "ios-list";
            }
            //you can return any component that you like here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        tabBarActiveTintColor: "#5CB3FF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer(){
  return(
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle:{
          width:240
        }
      }}>
        <Drawer.Screen name='Home' component={MyTab}/>
        <Drawer.Screen name='Settings' component={SettingScreen}/>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
