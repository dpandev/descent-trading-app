import { StyleSheet, ImageBackground } from 'react-native'
import { View, Text, ModifiedButton, ElementView } from '../../components/Themed'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

export default function WelcomeScreen() {
  const [activeButton, setActiveButton] = useState(false)
  const navigation = useNavigation()

  const onGetStarted = () => {
    navigation.navigate('SignupScreen')
  }

  const test = async () => {
    console.log('1', await Auth.currentAuthenticatedUser());
    console.log('2', await Auth.currentSession());
    console.log('3', await Auth.currentUserInfo());
  }

  return (
    <View style={styles.root}>
      <ImageBackground 
        source={require('../../assets/images/splash.png')}
        resizeMode='cover'
        style={styles.bgImage}
      >
        <ElementView style={styles.inner}>
          <Text style={styles.title}>Welcome</Text>
          <ModifiedButton 
            onPress={onGetStarted}
            text={'Get Started'}
            icon={'angle-right'}
            iconSize={25}
            buttonStyles={styles.button}
            activePress={activeButton}
            onPressChange={setActiveButton}
          />
          <ModifiedButton 
            onPress={test}
            text='test'
          />
        </ElementView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    padding: 25,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginTop: '50%',
    fontSize: 38,
    color: '#6338F1',
  },
  button: {
    width: '60%',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'red'
  },
})