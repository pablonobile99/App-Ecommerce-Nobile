import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Help from '../screens/Help';
import Navigator from './Navigator';
import Loadgame from '../screens/Loadgame';
import Header from '../components/Header';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../global/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: styles.tabBar
                }}

            >
                <Tab.Screen
                    name="HomeScreen"
                    component={Navigator}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            <View style={styles.icon}>
                                <Entypo
                                    name="home"
                                    size={24}
                                    color={!focused ? colors.dark : colors.primary}
                                />
                            </View>
                    }}
                />
                <Tab.Screen
                    name="MenuScreen"
                    component={Loadgame}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            <FontAwesome
                                name="search"
                                size={24}
                                color={!focused ? colors.dark : colors.primary}
                            />
                    }}
                />
                <Tab.Screen
                    name="HelpScreen"
                    component={Help}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="help-with-circle"
                                size={24}
                                color={!focused ? colors.dark : colors.primary}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.light,
        shadowColor: "black",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        marginHorizontal: 20,
        borderRadius: 15,
        height: 65,
    },
    icon: {
        flex: 1,
        justifyContent: "center",
/*         borderColor: "black",
        borderWidth: 5, */
    }
})