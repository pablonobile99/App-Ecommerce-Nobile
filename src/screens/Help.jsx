import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../global/BackGroundStyle'


const Help = ({ navigation, route }) => {

  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>
      <View style={styles.conteiner}>
        <Text>Help</Text>
      </View>
    </ImageBackground>
  )
}

export default Help

const styles = StyleSheet.create({
    conteiner: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  }
})