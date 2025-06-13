import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import games from '../data/games.json'
import Game from './Game'
import BotonBase from '../components/BotonBase'
import Header from '../components/Header'
import { globalStyles } from '../global/BackGroundStyle'


const Loadgame = ({ navigation, route }) => {


  const load = (gameId) => {
    const selected = games.filter(item => item.id == gameId)
    navigation.navigate("Game", selected);
  }

  const [busquedaJugadores, setBusquedaJugadores] = useState("")
  const [busquedaPartidas, setBusquedaPartidas] = useState("")
  const [gamesFiltrados, setGamesFiltrados] = useState(games)

  useEffect(() => {
    if (busquedaJugadores) {
      const filtradosJugadores = games.filter(item => item.jugadores == busquedaJugadores)
      setGamesFiltrados(filtradosJugadores)
      setBusquedaPartidas("")
    }
    if (busquedaPartidas) {
      const filtradosPartidas = games.filter(item => item.id == busquedaPartidas)
      setGamesFiltrados(filtradosPartidas)
      setBusquedaJugadores("")
    }
    if (!busquedaJugadores && !busquedaPartidas) {
      setGamesFiltrados(games)
    }
  }, [busquedaJugadores, busquedaPartidas])



  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>

      <Header back={true} backTo={"Home"} navigation={navigation}></Header>
      <View style={styles.conteiner}>
        <TextInput
          style={styles.serch}
          placeholder='Buscar partida por cantidad de jugadores...'
          value={busquedaJugadores}
          onChangeText={setBusquedaJugadores}
        />
        <TextInput
          style={styles.serch}
          placeholder='Buscar partida por numero de partida...'
          value={busquedaPartidas}
          onChangeText={setBusquedaPartidas}
        />

        <FlatList
          style={styles.list}
          keyExtractor={(games) => games.id.toString()}
          data={gamesFiltrados}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.gamesItem} onPress={() => load(item.id)}>
              <BotonBase tamaño={"big"}>
                <Text style={globalStyles.text}>
                  juego:
                  {" " + item.id + " - "}
                  jugadores:
                  {" " + item.jugadores}
                </Text>
              </BotonBase>

            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
}

export default Loadgame

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  list: {
    marginVertical: 50,
    flex: 1,
  },
  serch: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    margin: 3,
    width: "80%",
    fontFamily: "LoraRegular",
  },
})