import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Help from './Help'


const History = ({navigation}) => {

  const visitarHistory = () => {
    navigation.navigate("Help");
  };

  return (
    <View>
      <Text>History</Text>
      <Button title='Help' onPress={()=> visitarHistory()}/>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})