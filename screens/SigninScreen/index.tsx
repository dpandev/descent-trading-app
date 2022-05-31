import { StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { View, ElementView, Text, ModifiedButton } from '../../components/Themed'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import SocialLoginButtons from '../../components/SocialLoginButtons'

export default function SigninScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeButton, setActiveButton] = useState(false)

  const onPressSignin = () => {
    console.log("signin pressed");
  }

  const onPressSignup = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.root}>
          <Text style={[styles.title, styles.lightColor]}>Sign in to an existing account</Text>
          <ElementView style={styles.form}>
            <CustomInput 
              label={'E-Mail'}
              labelStyles={styles.purpleColor}
              value={email}
              setValue={setEmail}
              placeholder={'yourname@example.com'}
              placeholderTextColor={styles.lightColor.color}
              textContentType={'emailAddress'}
              keyboardAppearance={'dark'}
              componentStyles={styles.inputContainer}
              selectionColor={styles.purpleColor.color}
            />
            <CustomInput 
              label={'Password'}
              labelStyles={styles.purpleColor}
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              placeholder={'yourpassword'}
              placeholderTextColor={styles.lightColor.color}
              textContentType={'password'}
              keyboardAppearance={'dark'}
              componentStyles={styles.inputContainer}
              selectionColor={styles.purpleColor.color}
            />
            <ModifiedButton 
              onPress={onPressSignin}
              text={'Sign in'}
              textStyles={styles.lightColor}
              buttonStyles={styles.signinBtn}
              activePress={activeButton}
              onPressChange={setActiveButton}
            />
            <SocialLoginButtons />
            <Text style={[styles.signupLabel, styles.lightColor]}>Don't have an account?</Text>
            <ModifiedButton 
              onPress={onPressSignup}
              text={'Sign up'}
              buttonStyles={styles.signupBtn}
              textStyles={styles.signupBtnText}
              icon={'angle-right'}
              iconSize={25}
            />
          </ElementView>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    borderBottomColor: '#D1D1D1',
  },
  purpleColor: {
    color: '#6338F1',
  },
  lightColor: {
    color: '#D1D1D1',
  },
  signinBtn: {
    alignSelf: 'center',
    width: '50%',
  },
  signupLabel: {
    fontSize: 16,
    marginTop: 50,
  },
  signupBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  signupBtnText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#6338F1',
  },
})