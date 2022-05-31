import { StyleSheet } from 'react-native';
import { View, Text, ModifiedButton } from '../../components/Themed'
import { RootTabScreenProps } from '../../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const onSignup = () => {
    navigation.navigate('SignupScreen')
  }

  const onSignin = () => {
    navigation.navigate('SigninScreen')
  }

  return (
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
