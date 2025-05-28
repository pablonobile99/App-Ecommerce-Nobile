import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import games from '../data/games.json'
import Game from './Game'



const Loadgame = () => {

  const [gameSelected, setGameSelected] = useState ()
  const [statusSelected, setStatusSelected] = useState (false)
  

  const load = (gameButton) => {
    const selected = games.filter(item => item.id == gameButton)
    setGameSelected(selected)
    setStatusSelected (true)

  }

  const backToLoad = () => {
    setStatusSelected (false)
  }

  return (
    <>
      { !statusSelected? (
        <FlatList
          style={styles.list}
          keyExtractor={(games) => games.id.toString()}
          data={games}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => load(item.id)}>
              <Text>
                juego:
                {item.id}
                jugadores
                {item.jugadores}
              </Text>
              
            </TouchableOpacity>
          )}
        />
      ) : (
        <Game partida={gameSelected} backToLoad={backToLoad}/>
      ) }

    </>
  )
}

export default Loadgame

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    width: "100%"
  },
  list: {
    marginVertical: 200,
    flex: 1,
  }
})