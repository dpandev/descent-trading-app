import React from 'react'
import SimpleColorButton from '../SimpleColorButton'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

export default function SocialLoginButtons() {

  const onSignInApple = () => {
    console.warn('Sign In Apple')
  }

  const onSignInGoogle = async () => {
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
        text={"Continue with Apple"} 
        bgColor='#000000'
        fgColor='#6338F1'
      />
      <SimpleColorButton 
        onPress={onSignInGoogle} 
        text={"Continue with Google"} 
        bgColor='#000000'
        fgColor='#6338F1'
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