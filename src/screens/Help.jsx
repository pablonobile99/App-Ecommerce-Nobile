import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Help = ({navigation, route}) => {
  const visitarHistory = () => {
    navigation.navigate("History");
  };

  console.log(route.params)

  return (
    <View>
      <Text>Help</Text>
      <Button title='History' onPress={()=> visitarHistory()}/>

    </View>
  )
}

export default Help

const styles = StyleSheet.create({})