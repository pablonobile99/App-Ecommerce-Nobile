import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import games from '../data/games.json'
import BotonBase from './BotonBase'


const BoxJugador = ({jugador, name, cash, total}) => {
  

  return (
    <BotonBase tamaño={"medium"}>
      <Text>Jugador: {jugador}</Text>
      <Text>Nombre: {name}</Text>
      <Text>Efectivo: {cash}</Text>
      <Text>Riqueza: {total}</Text>
    </BotonBase>
  )
}

export default BoxJugador

const styles = StyleSheet.create({})