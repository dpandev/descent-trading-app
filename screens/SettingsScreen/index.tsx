import { View, Text, ModifiedButton } from '../../components/Themed'
import { StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { Auth } from 'aws-amplify'
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider'

export default function SettingsScreen() {
  const { setTheUser } = useContext(AuthenticatedUserContext)
  const [activeButton, setActiveButton] = useState(false)

  const onSignOut = async () => {
    await Auth.signOut().then(setTheUser(null))
  }

  return (
    <View style={styles.root}>
      <ModifiedButton 
        onPress={onSignOut}
        text={'Sign out'}
        textStyles={styles.lightColor}
        buttonStyles={styles.signOutBtn}
        activePress={activeButton}
        onPressChange={setActiveButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  lightColor: {},
  signOutBtn: {},
})