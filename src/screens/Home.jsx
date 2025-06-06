import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Loadgame from './Loadgame'

const Home = ({funcionFondo}) => {

  return (
    <View style={styles.conteiner}>
      <Header back={false} funcionFondo={funcionFondo}></Header>
      
      {/* <Text>Home</Text> */}

      <Loadgame></Loadgame>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})