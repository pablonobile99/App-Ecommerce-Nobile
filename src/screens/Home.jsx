import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Loadgame from './Loadgame'
import { globalStyles } from '../global/BackGroundStyle'


const Home = ({ funcionFondo, navigation, route }) => {

  const visitarLoadgame = () => {
    navigation.navigate("Loadgame");
  };

  const visitarNewgame = () => {
    navigation.navigate("Newgame");
  };

  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>

      <View style={styles.conteiner}>


        <Header back={false} funcionFondo={funcionFondo}></Header>

        <Button title='New Game' onPress={() => visitarNewgame()} />

        <Button title='Load Game' onPress={() => visitarLoadgame()} />


      </View>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})