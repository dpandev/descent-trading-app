import React from 'react'
import SimpleColorButton from '../SimpleColorButton'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

export default function SocialLoginButtons() {

  const onSignInApple = () => {
    console.warn('Sign In Apple')
  }

  const onSignInGoogle = async () => {
    // console.warn('Sign In Google')
    console.log('google signin');
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
  }

  const onSignInFacebook = () => {
    console.warn('Sign In Facebook')
  }

  return (
    <>
      <SimpleColorButton 
        onPress={onSignInApple} 
        text={"Sign In with Apple"} 
        bgColor='#e3e3e3'
        fgColor='#363636'
      />
      <SimpleColorButton 
        onPress={onSignInGoogle} 
        text={"Sign In with Google"} 
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
      />
      {/* <SimpleColorButton 
        onPress={onSignInFacebook} 
        text={"Sign In with Facebook"} 
        bgColor='#E7EAF4'
        fgColor='#4765A9'
      /> */}
    </>
  )
}