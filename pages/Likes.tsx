import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

const Likes = () => {

  const likesData = useSelector( (obj: StateType) => obj.LikesReducer)
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log("Likes Call")
    AsyncStorage.getItem("likes").then(arr => {
        console.log(arr)
    })
  }, [])
    

  return (
    <View>
      <Text>{JSON.stringify(likesData)}</Text>
    </View>
  )
}

export default Likes

const styles = StyleSheet.create({})