import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import BotonBase from './BotonBase'


const Menu = ({ title, funcionFondo }) => {

  const [menuVisible, setMenulVisible] = useState(false)

  const activarMenu = () => {
    setMenulVisible(true)
  }

  const desactivarMenu = () => {
    setMenulVisible(false)
  }

  return (
    <>
      <TouchableOpacity onPress={(activarMenu)} style={styles.container}>
        <BotonBase tamaño={"cube"}>
          <Text style={styles.text}>
            MENU
          </Text>
        </BotonBase>

      </TouchableOpacity>

      <Modal visible={menuVisible} animationType='slide' transparent={true}>
        <View style={styles.modalMenu}>
          <Text style={styles.text}>
            Configuracion:
          </Text>
          <Button title={"FONDO"} onPress={funcionFondo}></Button>
          <Button title={"cerrar"} onPress={desactivarMenu}></Button>
        </View>
      </Modal>
    </>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  modalMenu: {
    backgroundColor: colors.soft,
    width: "80%",
    height: "60%",
    marginVertical: "40%",
    marginHorizontal: "10%",
    alignContent: "center",
    justifyContent: "center",
    gap: 20,
    padding: 20,
    borderRadius: 10,
  },
  text:{
    fontFamily: "LoraRegular",
  }
})