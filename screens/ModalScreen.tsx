import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function ModalScreen({
  navigation
}: StackScreenProps<RootStackParamList>) {
  const onPress = () => {
    navigation.goBack()
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Pressable>
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
});
