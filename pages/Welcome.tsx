import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'
import { userGet } from '../utils/util'

const Welcome = () => {

    const navigation = useNavigation<any>()
    
    useEffect(() => {
      userGet().then((res) => {
        if (res) {
            console.log(res)
            navigation.dispatch(
                StackActions.replace('AppTabs', {
                  user: 'jane',
                })
              )
        }else {
            navigation.navigate("Login",{replace: true})
        }
      })
    }, [])
    

  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})