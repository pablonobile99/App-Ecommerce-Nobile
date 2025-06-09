import { FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import games from '../data/games.json'
import Game from './Game'
import BotonBase from '../components/BotonBase'
import Header from '../components/Header'
import { globalStyles } from '../global/BackGroundStyle'


const Loadgame = ({ navigation, route }) => {

  const [gameSelected, setGameSelected] = useState()
  const [statusSelected, setStatusSelected] = useState(false)


  const load = (gameId) => {

    const selected = games.filter(item => item.id == gameId)
    setGameSelected(selected)
    setStatusSelected(true)
    navigation.navigate("Game", selected);
  }

  const backToLoad = () => {
    setStatusSelected(false)
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

      <Header back={true}></Header>

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
              <Text style={styles.text}>
                juego:
                {" " + item.id + " - "}
                jugadores:
                {" " + item.jugadores}
              </Text>
            </BotonBase>

          </TouchableOpacity>
        )}
      />

    </ImageBackground>
  )
}

export default Loadgame

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: "100%"
  },
  list: {
    marginVertical: 200,
    flex: 1,
  },
  gamesItem: {

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
  text: {
    fontFamily: "LoraRegular",
  }
})