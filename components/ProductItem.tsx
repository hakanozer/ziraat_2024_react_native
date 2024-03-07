import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../models/ProductsModel'

const ProductItem = (props: {item: Product}) => {
  return (
    <TouchableOpacity>
        <View>
            <Text>{props.item.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({})