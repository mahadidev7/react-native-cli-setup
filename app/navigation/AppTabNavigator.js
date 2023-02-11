import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, NotificationsScreen, AccountScreen } from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import COLORS from '../configs/colors';

const Tab = createBottomTabNavigator()

const AppTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarInactiveTintColor: COLORS.inActiveTintColor,
                tabBarActiveTintColor: COLORS.activeTintColor,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    borderTopWidth: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 60,
                }
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="NotificationsScreen" component={NotificationsScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <Button onPress={() => navigation.navigate('NotificationsScreen')} />
                })}
            />
            <Tab.Screen name="AccountScreen" component={AccountScreen}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

/**
 * Tab Navigator Custom button for the middle one
 */
const Button = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name="ios-notifications-outline" size={27} color={COLORS.primary} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 30,
        bottom: 35,
        borderColor: "#f9f9f9",
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 30,
        height: 30,
    }
})

export default AppTabNavigator;