import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Loadgame from '../screens/Loadgame';
import Newgame from '../screens/Newgame';
import Game from '../screens/Game';
import History from '../screens/History';
import Help from '../screens/Help';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Loadgame" component={Loadgame} />
            <Stack.Screen name="Newgame" component={Newgame} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    )
}

export default Navigator
