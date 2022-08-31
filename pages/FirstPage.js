import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTopStyle}>
        This is the First Page
      </Text>
      <Button
        title='Go to second pag'
        color= '#77BFC7'
        onPress={() => navigation.navigate('Second Page')}/>
      <Button
        title='Go to third page'
        color= '#92C7C7'
        onPress={() => navigation.navigate('Third Page')}/>
    </View>
  )
}

export default FirstPage