import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoxJugador from '../components/BoxJugador'
import games from '../data/games.json'
import { globalStyles } from '../global/BackGroundStyle'



const Game = ({ navigation, route }) => {

  /* const [game, setGame] = useState({})
  const selected = games.filter(item => item.id == partida)
  console.log(selected)
  setGame(selected.data) */

  const [datos, setData] = useState()

  const filterData = () => {
    route.params.forEach(e => {
      setData(e.data)
    });
  }
  !datos ? filterData() : {}

  const visitarHistory = () => {
    navigation.navigate("History");
  };


  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>

      <View style={styles.conteiner}>

        <Button title='Historial' onPress={() => visitarHistory()} />

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
    justifyContent: "center",
    marginTop: 100,
    width: "100%",
  },
  jugadorConteiner: {
  }
})