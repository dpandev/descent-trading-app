import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types"
import useColorScheme from "../hooks/useColorScheme"
import Colors from "../constants/Colors"
import React from 'react'

import BottomTabNavigator from './BottomTabNavigator'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import CoinDetailsScreen from '../screens/CoinDetailsScreen'
import CoinExchangeScreen from '../screens/CoinExchangeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function MainNavigator() {
  const colorScheme = useColorScheme()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerStyle: { backgroundColor: Colors[colorScheme].secondary }, presentation: 'modal' }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen 
          name="CoinDetails" 
          component={CoinDetailsScreen} 
          options={{ title: 'Details', headerStyle: { backgroundColor: Colors[colorScheme].secondary } }} 
        />
        <Stack.Screen 
          name="CoinExchange" 
          component={CoinExchangeScreen} 
          options={{ title: 'Exchange', headerStyle: { backgroundColor: Colors[colorScheme].secondary } }} 
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}