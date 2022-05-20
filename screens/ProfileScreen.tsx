import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import ProfileInfo from '../components/ProfileInfo';
import RecentTrades from '../components/RecentTrades';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <ProfileInfo />
      <View style={styles.recentTrades}>
        <RecentTrades />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  recentTrades: {
    maxWidth: 400,
  },
});
