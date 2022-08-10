import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const FirstPage = ({navigation, route}) => {
    const [postText, setPostText] = React.useState('');

    return (
      //use Fragment, setPostText => PostText
      <View style={styles.container}>
        <Text style={styles.heading}>
            Thai-Nichi Institute of Techonology
        </Text>
        <Text style={styles.textStyle}>
            Please insert your name to pass it to second screen
        </Text>
        <TextInput
            multiline
            placeholder='Plese text here'
            style={{padding: 10,backgroundColor: 'lightgray', marginBottom:10 }}
            onChangeText={setPostText}
            value={postText}
        />
        <Button
            title='Go next'
            color='salmon'
            onPress={() => {
            //Pass params back to HomeScreen funchion
            navigation.navigate('Second Page', { post: postText })
            }}
        />
    </View>
  
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
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10,
    },
})