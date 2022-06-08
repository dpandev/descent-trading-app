import { StyleSheet } from 'react-native';
import { View, Text, ModifiedButton } from '../../components/Themed'
import { RootTabScreenProps } from '../../types';
import React, { useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { theUser } = useContext(AuthenticatedUserContext)

  const test = async () => {
    console.log('user:', theUser.id);
    // console.log('1', await Auth.currentAuthenticatedUser());
    // console.log('2', await Auth.currentSession());
    // console.log('3', await Auth.currentUserInfo());
  }

  return (//TODO display welcome screen -> useContext in navigation for unauthenticated user -> display signin/signup over bottomtabs
    // <Text>Welcome</Text>
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ModifiedButton 
        onPress={test}
        text='test'
      />
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
