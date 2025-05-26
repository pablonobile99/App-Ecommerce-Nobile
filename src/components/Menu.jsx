import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Menu = ({title}) => {
  return (
      <Button title={title} style={styles.container}></Button>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
      },
})