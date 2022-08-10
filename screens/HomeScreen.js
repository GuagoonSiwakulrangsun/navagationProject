import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Ionicons name='home' size={25} color='salmon'/>
      <Text style={{fontWeight: 'bold',marginBottom:5}}>
        Home Screen
      </Text>
      <Button
        title='About us'
        color= 'salmon'
        onPress={() => navigation.navigate('About',{
            email:'reactnative.tni.ac.th'
        })}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})