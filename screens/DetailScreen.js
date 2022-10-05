import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator } from 'react-native'
import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'

const DetailScreen = ({navigation,route}) => {
  const {id, title} = route.params;

  const [detail, setDetail] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      //title: 'รายละเอียดสินค้า'
      title:title
    },[navigation,title])
  })

  const getData = async(id) =>{
    try {
      setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course/'+id);
      console.log(res.data.data)
      alert(JSON.stringify(res.data.data))
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error ไปที่ state ของ error ว่าเกิดจาก axios หรือ server
    }
  }

  useEffect(()=>{
    getData(id);
  },id)

  if(loading === true){
    return(
      <View>
        <ActivityIndicator color='#f4511e' size='large'/>
      </View>
    )
  }
  
  return (
    <View>
      <Text>{id}{title}</Text>
    </View>
  )
}



export default DetailScreen

const styles = StyleSheet.create({})