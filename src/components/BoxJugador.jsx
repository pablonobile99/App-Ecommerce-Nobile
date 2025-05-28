import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import games from '../data/games.json'


const BoxJugador = ({jugador, name, cash, total}) => {
  

  return (
    <View style={styles.box}>
      <Text>Jugador: {jugador}</Text>
      <Text>Nombre: {name}</Text>
      <Text>Efectivo: {cash}</Text>
      <Text>Riqueza: {total}</Text>
    </View>
  )
}

export default BoxJugador

const styles = StyleSheet.create({
  box:{
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    width: 120,
    height: 120,
    margin: 15,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  }

})