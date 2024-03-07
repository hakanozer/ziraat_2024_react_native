import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { allProduct } from '../api'
import { Product } from '../models/ProductsModel'
import ProductItem from '../components/ProductItem'

const Products = () => {

   const [arrProduct, setArrProduct] = useState<Product[]>([]) 

  useEffect(() => {
    allProduct().then((res) => {
        const dt = res.data
        const arr = dt.products
        setArrProduct(arr)
    })
  }, [])
  

  return (
    <View>
      <FlatList 
        data={arrProduct}
        renderItem={({item, index}) => 
            <ProductItem item={item} />
        }
      />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})