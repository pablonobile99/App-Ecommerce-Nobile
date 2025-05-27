import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Home = ({funcionFondo}) => {
  return (
    <View style={styles.conteiner}>
      <Header back={false} funcionFondo={funcionFondo}></Header>
      <Text>Home</Text>
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