import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Menu = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Button title={title}></Button>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: "black",
        width: "30%",
        height: "100%",
        backgroundColor: colors.primary,

      },
})