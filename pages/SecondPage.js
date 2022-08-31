import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>
        This is the Second Page
      </Text>
      <Button
        title='Go to First page'
        color= '#77BFC7'
        onPress={() => navigation.navigate('First Page')}/>
      <Button
        title='Go to Third page'
        color= '#92C7C7'
        onPress={() => navigation.navigate('Third Page')}/>
    </View>
  )
}

export default SecondPage