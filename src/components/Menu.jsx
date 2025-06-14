import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import BotonBase from './BotonBase'
import { globalStyles } from '../global/BackGroundStyle'

import Entypo from '@expo/vector-icons/Entypo';

const Menu = ({ title, funcionFondo, navigation, route }) => {

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
          <Entypo name="menu" size={30} color={colors.primary} />
        </BotonBase>

      </TouchableOpacity>

      <Modal visible={menuVisible} animationType='slide' transparent={true}>
        <View style={styles.modalMenu}>
          <Text style={globalStyles.text}>
            Configuracion:
          </Text>

          <TouchableOpacity onPress={(funcionFondo)}>
            <BotonBase tamaño={"small"}>
              <Text style={globalStyles.text}>
                Fondo
              </Text>
            </BotonBase>

          </TouchableOpacity>
          <TouchableOpacity onPress={(desactivarMenu)}>
            <BotonBase tamaño={"small"}>
              <Text style={globalStyles.text}>
                Cerrar
              </Text>
            </BotonBase>

          </TouchableOpacity>
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
    flex: 1,
    backgroundColor: colors.secondary,
    marginVertical: "40%",
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  }
})