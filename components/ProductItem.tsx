import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../models/ProductsModel'
import { useNavigation } from '@react-navigation/native'

const ProductItem = (props: {item: Product}) => {

  const navigation = useNavigation<any>()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {item: props.item})}>
        <View style={{ marginBottom: 10, justifyContent: 'flex-start', flexDirection: 'row' }}>
            <View>
                <Image style={styles.image} source={{uri: props.item.thumbnail}} />
            </View>
            <View style={{marginLeft: 10,}}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.price}>{props.item.price}₺</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 18,
        textAlign: 'right',
    },
    price: {

    }
})