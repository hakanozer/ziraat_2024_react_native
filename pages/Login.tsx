// rnfes
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IUser } from '../models/IUser';

const Login = () => {

  const navigation = useNavigation<any>();
  const sendObj: IUser = {
      id: 100,
      name: 'Selin'
  }

  return (
    <SafeAreaView>
        <StatusBar hidden />
      <Text>Login</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Register', {item: sendObj} ) }>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({

})