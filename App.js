import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/colors';
import games from './src/data/games.json'

const fondoGreen = require("./assets/fondo.png")
const fondoBlue = require("./assets/fondoAzul.png")

export default function App() {
  return (
    <ImageBackground source={fondoGreen} resizeMode='cover' style={styles.container}>

      <Header back={true}></Header>

      <FlatList
        data={games}
        renderItem={({ item }) =>
          <Text>{item}</Text>
        }
        keyExtractor={itemEl => itemEl}
      />

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "30%"

  },
});
