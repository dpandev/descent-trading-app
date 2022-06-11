import { StyleSheet, ImageBackground } from 'react-native'
import { View, Text, ElementView, ModifiedButtonInverted } from '../../components/Themed'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function WelcomeScreen() {
  const [activeButton, setActiveButton] = useState(false)
  const navigation = useNavigation()

  const onGetStarted = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    <View style={styles.root}>
      <ImageBackground 
        source={require('../../assets/images/splash.png')}
        resizeMode='cover'
        style={styles.bgImage}
      >
        <ElementView style={styles.inner}>
          <Text style={styles.title}>Don't lose your savings in crypto</Text>
          <ElementView style={styles.row}>
            <Text style={styles.title}>Lose virtual instead </Text>
            <FontAwesome5 name={'laugh-wink'} color={'#6338F1'} size={25} />
          </ElementView>
          <ModifiedButtonInverted 
            onPress={onGetStarted}
            text={'Get Started'}
            textStyles={styles.buttonText}
            icon={'angle-right'}
            iconSize={25}
            buttonStyles={styles.button}
            activePress={activeButton}
            onPressChange={setActiveButton}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Bradley Hand',
    fontSize: 22,
    color: '#6338F1',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 100,
    width: '100%',
    maxWidth: 200,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonText: {
    // flex: 1,
  },
})