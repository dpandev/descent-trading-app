import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { View, Text } from '../Themed'

export default function ProfileInfo() {
  return (
    <View style={styles.profileContainer}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }} 
        width={50}
        height={50}
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Elon Musk</Text>
        <Text style={styles.profileText}>
          Assets: {''}
          <Text style={styles.profileTextData}>$52,003,997,551</Text>
        </Text>
        <Text style={styles.profileText}>
          Total Trades: {''}
          <Text style={styles.profileTextData}>1729</Text>
        </Text>
        <Text style={styles.profileText}>
          Last Trade: {''}
          <Text style={styles.profileTextData}>BTC - USD</Text>
        </Text>
        <Text style={styles.profileText}>
          Followers: {''}
          <Text style={styles.profileTextData}>253</Text>
        </Text>
        <Text style={styles.profileText}>
          Member Since: {''}
          <Text style={styles.profileTextData}>May 15, 2022</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  profileText: {
    marginVertical: 2,
  },
  profileTextData: {
    color: '#3EF03E',
  },
})