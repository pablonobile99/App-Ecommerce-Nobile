import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BotonBase from './BotonBase'
import { globalStyles } from '../global/BackGroundStyle'

const Back = ({volver}) => {

  return (
    <View>
      <TouchableOpacity onPress={volver}>
        <BotonBase tamaño={"cube"}>
          <Text style={globalStyles.text}>Back</Text>
        </BotonBase>
      </TouchableOpacity>
    </View>
  )
}

export default Back
