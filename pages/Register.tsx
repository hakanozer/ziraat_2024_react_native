import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { IUser } from '../models/IUser'
import { StatusBar } from 'expo-status-bar'

const Register = () => {

  const navigateion = useNavigation()  
  const route = useRoute()
  const params = route.params

  useEffect(() => {
    navigateion.setOptions({title: 'User Register'})
    if (params) {
        const obj = params.item as IUser
    }
  }, [])
  

  return (
    <View>
      <StatusBar hidden={false} />
      <Text>Register</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})