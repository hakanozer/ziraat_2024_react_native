import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Product } from '../models/ProductsModel'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'

const ProductDetail = () => {

  const route = useRoute()
  const [proItem, setProItem] = useState<Product>()
  const params:any = route.params
  useEffect(() => {
    if (params) {
        const item = params.item as Product
        setProItem(item)
    }
  }, [])
  
  return (
    <ScrollView>
      { proItem &&
        <View>
            <Image source={{uri: proItem.thumbnail}} style={{width: '100%', height: 200}} />
            <Text>{proItem.title}</Text>
            <Text>{proItem.description}</Text>
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