import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondPage = ({ navigation, route }) => {
    React.useEffect(() => {
        if (route.params?.post) {
          //Post updated,do somethin with 'route.params.post'
          //For example, sent the post to the server      
        }
      }, [route.params?.post]);
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title='Create Post'
            color='salmon'
            onPress={() => navigation.navigate('CreatePost')}
          />
          <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
      );
}

export default SecondPage

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