import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { HeaderButtons,
         HeaderButton,
         Item,
         HiddenItem,
         OverflowMenu,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);


const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Register"
                iconName="person-add-sharp"
                onPress={() => alert('Register')}
                color='#5CB3FF' />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Ionicons name='home' size={25} color='#5CB3FF'/>
      <Text style={{fontWeight: 'bold',marginBottom:5, color:'#5CB3FF'}}>
        Home Screen
      </Text>
      <Button
        title='Open Drawer'
        color= '#82CAFF'
        onPress={()=>navigation.openDrawer()}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})