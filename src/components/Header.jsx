import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Menu from './Menu'

const Header = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.box1}>
        <Text>Header</Text>
      </View>
      <View style={styles.box2}>
        <Menu title={"MENU"}></Menu>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: "black",
    width: "96%",
    height: "8%",
    backgroundColor: colors.primary,
    position: "absolute",
    top: "5%",
    flexDirection: "row",
    alignItems: "center"
  },
  box1: {

    margin: "1%",
    width: "48%",
    alignItems: "flex-start"
  },
   box2: {
    margin: "1%",
    width: "48%",
    alignItems: "flex-end"
  },
})