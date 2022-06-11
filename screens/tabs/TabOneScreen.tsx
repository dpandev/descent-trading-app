import { StyleSheet, Image, useWindowDimensions } from 'react-native';
import { View, Text, ModifiedButton } from '../../components/Themed'
import { RootTabScreenProps } from '../../types';
import React, { useContext } from 'react';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';
const bgImage = require('../../assets/images/descentLogo.png')

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { theUser } = useContext(AuthenticatedUserContext)
  const {height} = useWindowDimensions()

  const test = async () => {
    console.log('user:', theUser.id);
  }

  return (
    <View style={styles.container}>
      <Image 
        style={[styles.logo, {height: height * 0.4}]}
        source={bgImage}
        resizeMode={'contain'}
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
  logo: {
    width: '100%',
    maxWidth: 400,
    maxHeight: 400,
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
