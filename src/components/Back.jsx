import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Back = ({backTo, navigation, route }) => {

  const Volver = () => {
    navigation.navigate(backTo)
  }

  return (
    <View>
      <Button title='Volver' onPress={Volver}/>
    </View>
  )
}

export default Back

const styles = StyleSheet.create({})