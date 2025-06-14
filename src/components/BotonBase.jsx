import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../global/colors'

const BotonBase = ({ children, tamaño }) => {

    if (tamaño == "big") {
        return (
            <View style={styles.big}>
                {children}
            </View>
        )
    }
    if (tamaño == "medium") {
        return (
            <View style={styles.medium}>
                {children}
            </View>
        )
    }
    if (tamaño == "small") {
        return (
            <View  style={styles.small}>
                {children}
            </View>
        )
    }
    if (tamaño == "cube") {
        return (
            <View style={styles.cube}>
                {children}
            </View>
        )
    }
    return (
        <Text style={styles.text}> Algo fallo</Text>
    )

}

export default BotonBase

const styles = StyleSheet.create({
    big: {
        width: 280,
        height: 100,
        backgroundColor: colors.light,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    cube: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    medium: {
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        width: 120,
        height: 120,
        margin: 15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    small: {
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        width: 200,
        height: 40,
        margin: 15,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "LoraRegular",
    }
})