import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Help from './Help'
import { globalStyles } from '../global/BackGroundStyle'
import Header from '../components/Header'
import BotonBase from '../components/BotonBase'


const History = ({ navigation, route }) => {

  const [historial, setHistorial] = useState()


  !historial ? setHistorial(route.params) : {}
  

  return (
    <ImageBackground source={require("../../assets/fondo.png")} resizeMode='cover' style={globalStyles.imageBK}>

      <Header back={true} backTo={"Game"} navigation={navigation}></Header>

      <View style={styles.conteiner}>
        <FlatList
          keyExtractor={(e) => e.operacion}
          data={historial}
          /* numColumns={"2"} */
          renderItem={({ item }) => (
            <BotonBase tamaño={"big"}>
              <Text style={globalStyles.text}>Jugador que paga: {item.Out}</Text>
              <Text style={globalStyles.text}>Jugador que Cobra: {item.In}</Text>
              <Text style={globalStyles.text}>Monto: {item.Charge}</Text>
            </BotonBase>
          )}
        />
      </View>
      
    </ImageBackground>
  )
}

export default History

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  }
})