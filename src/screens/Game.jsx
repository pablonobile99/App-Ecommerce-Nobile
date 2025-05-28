import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoxJugador from '../components/BoxJugador'
import games from '../data/games.json'

const Game = ({partida, backToLoad}) => {

  /* const [game, setGame] = useState({})
  const selected = games.filter(item => item.id == partida)
  console.log(selected)
  setGame(selected.data) */

  const [datos, setData] = useState()

  const filterData = () => {
    partida.forEach(e => {
      setData(e.data)
     });
  }
  ! datos ? filterData() : {}



  return (
    <View style={styles.conteiner}>
      <Button title='back' onPress={backToLoad}></Button>
      <FlatList
          style={styles.jugadorConteiner}
          keyExtractor={(producto) => producto.jugador}
          data={datos}
          renderItem={({ item }) => (
              <BoxJugador jugador={item.jugador} name={item.name} cash={item.cash} total={item.total}/>
          )}
        />
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    width: "100%",
  },
  jugadorConteiner:{
    flex: 1,
    flexDirection: "row",
  }
})