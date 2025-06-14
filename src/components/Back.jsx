import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BotonBase from './BotonBase'
import { globalStyles } from '../global/BackGroundStyle'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../global/colors';

const Back = ({volver}) => {

  return (
    <View>
      <TouchableOpacity onPress={volver}>
        <BotonBase tamaño={"cube"}>
          <MaterialIcons name="keyboard-return" size={30} color={colors.primary} />
        </BotonBase>
      </TouchableOpacity>
    </View>
  )
}

export default Back
