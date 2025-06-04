import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import games from '../data/games.json'
import BotonBase from './BotonBase'


const BoxJugador = ({jugador, name, cash, total}) => {
  

  return (
    <BotonBase tamaño={"medium"}>
      <Text style={styles.text}>Jugador: {jugador}</Text>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Efectivo: {cash}</Text>
      <Text style={styles.text}>Riqueza: {total}</Text>
    </BotonBase>
  )
}

export default BoxJugador

const styles = StyleSheet.create({
  text:{
    fontFamily: "LoraRegular",
  }
})