import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Help from './Help'
import { globalStyles } from '../global/BackGroundStyle'
import Header from '../components/Header'


const History = ({ navigation, route }) => {

  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>
      <Header back={true} backTo={"Game"} navigation={navigation}></Header>
      
      <View>
        <Text>History</Text>
      </View>
    </ImageBackground>
  )
}

export default History

const styles = StyleSheet.create({})