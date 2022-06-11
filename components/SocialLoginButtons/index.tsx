import React, { useState } from 'react'
import SimpleColorButton from '../SimpleColorButton'
import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

export default function SocialLoginButtons() {
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)

  const onSignInApple = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Apple })
  }

  const onSignInGoogle = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
  }

  const onSignInFacebook = () => {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })
  }

  return (
    <>
      <SimpleColorButton 
        onPress={onSignInApple} 
        text={"Continue with Apple"} 
        activePress={active1}
        onActivePress={setActive1}
      />
      <SimpleColorButton 
        onPress={onSignInGoogle} 
        text={"Continue with Google"} 
        activePress={active2}
        onActivePress={setActive2}
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