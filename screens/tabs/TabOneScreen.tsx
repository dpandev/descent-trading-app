import { StyleSheet } from 'react-native';
import SocialLoginButtons from '../../components/SocialLoginButtons';
import { View, Text, ModifiedButton } from '../../components/Themed'
import { RootTabScreenProps } from '../../types';
import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const onSignup = () => {
    navigation.navigate('SignupScreen')
  }

  const onSignin = () => {
    navigation.navigate('SigninScreen')
  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      if (user) {
        navigation.navigate('Root')
      }
    }
    
    fetchUser()
  }, [])

  return (//TODO display welcome screen -> useContext in navigation for unauthenticated user -> display signin/signup over bottomtabs
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ModifiedButton 
        onPress={onSignin}
        text='Sign in'
      />
      <ModifiedButton 
        onPress={onSignup}
        text='Sign up'
      />
      <SocialLoginButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
