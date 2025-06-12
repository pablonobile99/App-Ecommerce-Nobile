import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Loadgame from './Loadgame'
import { globalStyles } from '../global/BackGroundStyle'
import BotonBase from '../components/BotonBase'


const Home = ({ funcionFondo, navigation, route }) => {

  const visitarLoadgame = () => {
    navigation.navigate("Loadgame");
  };

  const visitarNewgame = () => {
    navigation.navigate("Newgame");
  };

  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>
      
      <Header back={false} funcionFondo={funcionFondo}></Header>

      <View style={styles.conteiner}>

          <TouchableOpacity onPress={() => visitarNewgame()}>
            <BotonBase tamaño={"big"}>
              <Text style={styles.text}>New Game</Text>
            </BotonBase>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => visitarLoadgame()}>
            <BotonBase tamaño={"big"}>
              <Text style={styles.text}>Load Game</Text>
            </BotonBase>
          </TouchableOpacity>
          
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