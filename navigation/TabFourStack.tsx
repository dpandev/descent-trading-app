import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../types';
import ProfileScreen from '../screens/ProfileScreen';
import FollowersScreen from '../screens/FollowersScreen';
import React, { useState } from 'react';
import { Text, View, ScrollView, ModifiedButton } from '../components/Themed';

export default function TabFourStack({
  navigation
}: StackScreenProps<RootStackParamList>) {
  const [topButton, setTopButton] = useState('profile')

  const handleTopButton = (value: string) => {
    setTopButton(value);
    console.log(topButton);
  }

  return (
    <>
      <View style={styles.topButtonsContainer}>
        <ModifiedButton
          active={topButton === 'profile'}
          text='Profile' 
          onPress={() => handleTopButton('profile')} 
          textStyles={styles.topButtonText}
          buttonStyles={styles.topButton}
        />
        <ModifiedButton
          active={topButton === 'friends'}
          text='Friends' 
          onPress={() => handleTopButton('friends')} 
          textStyles={styles.topButtonText}
          buttonStyles={styles.topButton}
        />
      </View>
      <ScrollView>
        {topButton === 'profile'
          ? <ProfileScreen />
          : <FollowersScreen />
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topButton: {
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 25,
    marginHorizontal: 10,
    borderRadius: 50,
    width: '35%',
    borderWidth: 1,
  },
  topButtonText: {
    fontWeight: 'bold',
    letterSpacing: 0.45,
  },
});
