import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/colors';
import games from './src/data/games.json'

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>PANes</Text>
      <StatusBar style="auto" />
      <FlatList
        data={games}
        renderItem={ ({item}) =>
        <Text>{item}</Text>
      }
      keyExtractor={itemEl => itemEl}
      />
      
    </View>
    
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
