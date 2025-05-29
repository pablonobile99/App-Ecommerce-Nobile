import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

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
            <View>
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
        <Text> Algo fallo</Text>
    )

}

export default BotonBase

const styles = StyleSheet.create({
    big:{
        width: 280,
        height: 100,
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    cube:{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    medium:{
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
    }
})