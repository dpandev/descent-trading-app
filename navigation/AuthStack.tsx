import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const AStack = createNativeStackNavigator()

export default function AuthStack() {

  return (
    <AStack.Navigator screenOptions={{headerShown: false}}>
      <AStack.Screen 
        name="WelcomeScreen" 
        component={WelcomeScreen} 
        options={{ title: 'Sign in', headerShown: false } }
      />
      <AStack.Screen 
        name="SignupScreen" 
        component={SignupScreen} 
        options={{ title: 'Sign in', headerShown: false } }
      />
      <AStack.Screen 
        name="SigninScreen" 
        component={SigninScreen} 
        options={{ title: 'Sign up', headerShown: false } }
      />
    </AStack.Navigator>
  )
}