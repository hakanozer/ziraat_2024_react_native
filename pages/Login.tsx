// rnfes
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, TextInput, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { IUser } from '../models/IUser';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { userLogin } from '../api';
import { userStore } from '../utils/util';

const w  = Dimensions.get("screen").width

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation<any>();
  const sendObj: IUser = {
      id: 100,
      name: 'Selin'
  }


  const fncLogin = () => {
    if (username === "") {
      Toast.show({
        type: 'error',
        text1: 'Username Empty!',
        position: 'top',
        topOffset: 70,
      })
    }else if (password === "") {
      Toast.show({
        type: 'error',
        text1: 'Password Empty!',
        position: 'bottom',
      })
    }else {
      userLogin(username, password).then((res) => {
        const status = res.status
        const dt = res.data
        userStore(dt).then(() => {
          console.log("login success")
        })

      }).catch((err:any) => {
        Toast.show({
          type: 'error',
          text1: err.message
        })
      })
    }
  }

  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <View style={styles.container}>
        <StatusBar />
      <View style={{ alignItems: 'center', marginBottom: 10,}}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.title}>User Login</Text>
      <TextInput onChangeText={(txt) => setUsername(txt)} style={styles.input} autoCapitalize='none' keyboardType='email-address' placeholder='Username' />
      <TextInput onChangeText={(txt) => setPassword(txt)} secureTextEntry style={styles.input} placeholder='Password' />

      <View style={{justifyContent: 'space-between', flexDirection: 'row', }}>
        <TouchableOpacity onPress={ fncLogin }>
          <View style={styles.btnView}><Text style={styles.btnText} >Login</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Register', {item: sendObj} ) }>
          <View style={styles.btnView}><Text style={styles.btnText} >Register</Text></View>
        </TouchableOpacity>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 5,
    fontSize: 18,
  },
  btnView: {
    padding: 5,
    backgroundColor: '',
    borderWidth: 1,
    borderRadius: 5,
   width: w / 2.3
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
  }
})