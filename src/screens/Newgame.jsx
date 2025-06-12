import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../global/BackGroundStyle'
import Header from '../components/Header'

const Newgame = ({ navigation, route }) => {
  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>
      <Header back={true} backTo={"Home"} navigation={navigation}></Header>
      <View>
        <Text>Newgame</Text>
      </View>
    </ImageBackground>
  )
}

export default Newgame

const styles = StyleSheet.create({})