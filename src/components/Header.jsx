import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Menu from './Menu'
import Back from './Back'

const Header = ({back, funcionFondo}) => {
  if (back == true) {
    return (
      <>
        <View style={styles.box1}>
          <Back></Back>
        </View>
        <View style={styles.box2}>
          <Menu title={"MENU"} funcionFondo={funcionFondo}></Menu>
        </View>
      </>
    )
  }
  else{
     return (
      <>
        <View style={styles.box2}>
          <Menu title={"MENU"} funcionFondo={funcionFondo}></Menu>
        </View>
      </>
    )
  }

}

export default Header

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    position: "absolute",
    top: 0,
    left: 40,
    borderRadius: 5,
  },
  box2: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 0,
    right: 40,
    borderRadius: 5,
  },
})