import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function SettingsScreen({
  navigation
}: StackScreenProps<RootStackParamList>) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
});
