import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/colors';
import games from './src/data/games.json'
import Home from './src/screens/Home';
import { useState } from 'react';



export default function App() {

  const fondoGreen = require("./assets/fondo.png")
  const fondoBlue = require("./assets/fondoAzul.png")

  const [fondo, setFondo] = useState(fondoGreen)

  const fondoChange = () => {
    if(fondo == fondoGreen) setFondo(fondoBlue)
    else setFondo(fondoGreen)
  }

  return (
    <ImageBackground source={fondo} resizeMode='cover' style={styles.container}>

      
      <Home funcionFondo={fondoChange} ></Home>
      {/* <FlatList
        data={games}
        renderItem={({ item }) =>
          <Text>{item}</Text>
        }
        keyExtractor={itemEl => itemEl}
      /> */}

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
