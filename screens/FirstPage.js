import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstPage = ({navigation, route}) => {
    const [postText, setPostText] = React.useState('');

    return (
      //use Fragment, setPostText => PostText
      <>
      <TextInput
        multiline
        placeholder='Plese text here'
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        onChangeText={setPostText}
        value={postText}
      />
      <Button
        title='Click'
        color='salmon'
        onPress={() => {
          //Pass params back to HomeScreen funchion
          navigation.navigate('Home', { post: postText })
        }}
      />
    </>
  
  );
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
})