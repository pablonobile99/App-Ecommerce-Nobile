import { Button, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BoxJugador from '../components/BoxJugador'
import games from '../data/games.json'
import { globalStyles } from '../global/BackGroundStyle'
import Header from '../components/Header'
import BotonBase from '../components/BotonBase'



const Game = ({ navigation, route }) => {

  const [datos, setData] = useState()
  const [partidaId, setPartidaId] = useState()
  const [historial, setHistorial] = useState()

  const filterData = () => {
    route.params.forEach(e => {
      setData(e.data)
      setPartidaId(e.id)
      setHistorial(e.history)
    });
  }
  
  !datos ? filterData() : {}

  const visitarHistory = () => {
    navigation.navigate("History", historial);
  };


  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>

      <Header back={true} backTo={"Loadgame"} navigation={navigation}></Header>

      <View style={styles.conteiner}>


        <TouchableOpacity onPress={() => visitarHistory()}>
          <BotonBase tamaño={"small"}>
            <Text style={globalStyles.text}>Historial</Text>
          </BotonBase>
        </TouchableOpacity>

        <FlatList
          style={styles.jugadorConteiner}
          keyExtractor={(producto) => producto.jugador}
          data={datos}
          numColumns={"2"}
          renderItem={({ item }) => (
            <BoxJugador jugador={item.jugador} name={item.name} cash={item.cash} total={item.total} />
          )}
        />
      </View>
    </ImageBackground>
  )
}

export default Game

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  jugadorConteiner:{

  }
})