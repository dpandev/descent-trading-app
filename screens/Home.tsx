import { View, Text, ModifiedButton } from '../components/Themed'
import { StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  const onSignup = () => {
    navigation.navigate('SignupScreen')
  }

  const onSignin = () => {
    navigation.navigate('SigninScreen')
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}