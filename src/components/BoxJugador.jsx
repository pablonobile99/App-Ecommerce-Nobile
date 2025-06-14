import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import games from '../data/games.json'
import BotonBase from './BotonBase'
import { globalStyles } from '../global/BackGroundStyle'
import { colors } from '../global/colors'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';



const BoxJugador = ({ jugador, name, cash, total }) => {

  const [operationVisible, setOperationVisible] = useState(false)

  const activarOperation = () => {
    setOperationVisible(true)
  }

  const desactivarOperation = () => {
    setOperationVisible(false)
  }

  const [monto, setMonto] = useState()

  const montoHandle = (text) => {
    const soloNumeros = text.replace(/[^0-9]/g, '');
    setMonto(soloNumeros);
  }

  const [qr, setQr] = useState(false)

  const changeQr = () => {
    if (qr) setQr(false)
    else setQr(true)
  }

  const finalizarOperation = () => {
    desactivarOperation()
  }

  return (
    <>
      <TouchableOpacity onPress={activarOperation}>
        <BotonBase tamaño={"medium"}>
          <Text style={globalStyles.text}>Jugador: {jugador}</Text>
          <Text style={globalStyles.text}>Nombre: {name}</Text>
          <Text style={globalStyles.text}>Efectivo: {cash}</Text>
          <Text style={globalStyles.text}>Riqueza: {total}</Text>
        </BotonBase>
      </TouchableOpacity>

      <Modal visible={operationVisible} animationType='slide' transparent={true}>
        <View style={styles.modalMenu}>

          <View style={styles.title}>
            <Text style={globalStyles.textBig} fontSize={20}> Pagar a jugador {jugador}: </Text>
          </View>

          <View style={styles.monto}>
            <MaterialIcons name="attach-money" size={40} color="black" />
            <TextInput
              style={styles.serch}
              placeholder='Monto'
              value={monto}
              onChangeText={montoHandle}
            />

          </View>

          {
            qr ?
              <Image source={require("../../assets/scanQR.png")} style={styles.imagen} />
              :
              <TextInput
                style={styles.jugadorManual}
                placeholder='Numero de jugador deudor'
                value={monto}
                onChangeText={montoHandle}
              />
          }


          <View style={styles.icon}>
            <TouchableOpacity onPress={desactivarOperation}>
              <BotonBase tamaño={"cube"}>
                <AntDesign name="close" size={24} color="black" />
              </BotonBase>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeQr}>
              <BotonBase tamaño={"cube"}>
                <MaterialIcons name="currency-exchange" size={24} color="black" />
              </BotonBase>
            </TouchableOpacity>
            <TouchableOpacity onPress={finalizarOperation}>
              <BotonBase tamaño={"cube"}>
                <Entypo name="check" size={24} color="black" />
              </BotonBase>
            </TouchableOpacity>
          </View>



        </View>
      </Modal>
    </>
  )
}

export default BoxJugador

const styles = StyleSheet.create({
  modalMenu: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginVertical: "40%",
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  serch: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    margin: 3,
    width: "60%",
    fontFamily: "LoraRegular",
  },
  monto: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  imagen: {
    width: 250,
    height: 250,
    marginVertical: 20,
  },
  jugadorManual: {
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    margin: 3,
    width: "60%",
    fontFamily: "LoraRegular",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    gap: 40,
  },
  title:{
    position: "absolute",
    top: 50,
  }
})