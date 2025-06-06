
import { Button, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View , StatusBar , use} from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/colors';
import games from './src/data/games.json'
import Home from './src/screens/Home';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "LoraBold": require("./assets/Lora-Bold.ttf"),
    "LoraRegular": require("./assets/Lora-Regular.ttf"),
  })

  
  const fondoGreen = require("./assets/fondo.png")
  const fondoBlue = require("./assets/fondoAzul.png")

  const [fondo, setFondo] = useState(fondoGreen)

  const fondoChange = () => {
    if (fondo == fondoGreen) setFondo(fondoBlue)
    else setFondo(fondoGreen)
  }
  if (!fontsLoaded || fontError) {
    return null;
  }
  else{
    return (
      <ImageBackground source={fondo} resizeMode='cover' style={styles.imageBK}>
        <View style={styles.container}>
            <Home funcionFondo={fondoChange}/>
        </View>
      </ImageBackground>
    );
  }
  
}

const styles = StyleSheet.create({
  imageBK: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
