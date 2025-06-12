
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

import Navigator from './src/navigation/Navigator';




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
      <Navigator></Navigator>
    );
  }
  
}
