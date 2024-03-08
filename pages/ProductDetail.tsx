import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Product } from '../models/ProductsModel'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import { SimpleLineIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { ILikesAction } from '../useRedux/LikesReducer'
import { LikesEnum } from '../useRedux/LikesEnum'

const ProductDetail = () => {

  const dispatch = useDispatch()
  const route = useRoute()
  const [proItem, setProItem] = useState<Product>()
  const params:any = route.params
  useEffect(() => {
    if (params) {
        const item = params.item as Product
        setProItem(item)
    }
  }, [])

  const addLikes = async () => {
    const stArr = await AsyncStorage.getItem("likes")
    if (stArr) {
      // Daha önce var
      const arr = JSON.parse(stArr) as string[]
      arr.push(proItem!.id.toString())
      AsyncStorage.setItem("likes", JSON.stringify(arr))
    }else {
      // Yeni kayıt
      const arr = [proItem!.id.toString()]
      AsyncStorage.setItem("likes", JSON.stringify(arr))
    }
    const sendObj: ILikesAction = {
      type: LikesEnum.LIKE_ADD,
      payload: proItem!.id.toString()
    }
    dispatch(sendObj)
  }
  
  return (
    <ScrollView>
      { proItem &&
        <View>
            <Image source={{uri: proItem.thumbnail}} style={{width: '100%', height: 200}} />
            <Text>{proItem.title}</Text>
            <Text>{proItem.description}</Text>
            <TouchableOpacity onPress={addLikes}>
              <SimpleLineIcons name='heart' size={30} />
            </TouchableOpacity>
        </View>
      }

      { proItem === undefined &&
        <Text>No Product!</Text>
      }
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})