import { StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { View, ElementView, Text, ModifiedButton, ScrollView } from '../../components/Themed'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import SocialLoginButtons from '../../components/SocialLoginButtons'

export default function SignupScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [activeButton, setActiveButton] = useState(false)
  const navigation = useNavigation()

  const onPressSignin = () => {
    navigation.navigate('SigninScreen')
  }

  const onPressSignup = () => {
    console.log('sign up pressed');
  }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{marginTop: 50}}>
          <View style={styles.root}>
            <Text style={[styles.title, styles.lightColor]}>Create an account</Text>
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
              <CustomInput 
                label={'Confirm Password'}
                labelStyles={styles.purpleColor}
                value={confirmPassword}
                setValue={setConfirmPassword}
                secureTextEntry={true}
                placeholder={'confirmpassword'}
                placeholderTextColor={styles.lightColor.color}
                textContentType={'password'}
                keyboardAppearance={'dark'}
                componentStyles={styles.inputContainer}
                selectionColor={styles.purpleColor.color}
              />
              <ModifiedButton 
                onPress={onPressSignup}
                text={'Sign up'}
                textStyles={styles.lightColor}
                buttonStyles={styles.signupBtn}
                activePress={activeButton}
                onPressChange={setActiveButton}
              />
              <SocialLoginButtons />
              <Text style={[styles.signinLabel, styles.lightColor]}>Already have an account?</Text>
              <ModifiedButton 
                onPress={onPressSignin}
                text={'Sign in'}
                buttonStyles={styles.signinBtn}
                textStyles={styles.signinBtnText}
                icon={'angle-right'}
                iconSize={25}
              />
            </ElementView>
          </View>
        </ScrollView>
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
  signupBtn: {
    alignSelf: 'center',
    width: '50%',
  },
  signinLabel: {
    fontSize: 16,
    marginTop: 50,
  },
  signinBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  signinBtnText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#6338F1',
  },
})