import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Product } from '../models/ProductsModel'

const ProductDetail = () => {

  const route = useRoute()
  const params:any = route.params
  useEffect(() => {
    if (params) {
        const item = params.item as Product
    }
  }, [])
  
  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})