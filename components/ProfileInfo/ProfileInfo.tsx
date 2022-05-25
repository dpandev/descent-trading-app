import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { View, Text } from '../Themed'
import profileData from '../../assets/dummyData/profileData'

export default function ProfileInfo() {
  return (
    <>
      {profileData.map((item, id) => (
        <View style={styles.profileContainer} key={id}>
          <Image 
            source={{ uri: item.profileImg }} 
            width={50}
            height={50}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{item.username}</Text>
            <Text style={styles.profileText}>
              Assets: {''}
              <Text style={[styles.profileTextData, (item.assets < 0 ? styles.red : styles.green)]}>
                {item.assets > 0 ? '$' : '-$'}
                {Math.abs(item.assets).toLocaleString("en-US")}
              </Text>
            </Text>
            <Text style={styles.profileText}>
              Total Trades: {''}
              <Text style={styles.profileTextData}>{item.totalTrades.toLocaleString('en-US')}</Text>
            </Text>
            <Text style={styles.profileText}>
              Last Trade: {''}
              <Text style={styles.profileTextData}>
                {item.lastTrade.tradePair[0]}{' - '}{item.lastTrade.tradePair[1]}
              </Text>
            </Text>
            <Text style={styles.profileText}>
              Followers: {''}
              <Text style={styles.profileTextData}>{item.followers.toLocaleString('en-US')}</Text>
            </Text>
            <Text style={styles.profileText}>
              Member Since: {''}
              <Text style={styles.profileTextData}>{item.createdAt}</Text>
            </Text>
          </View>
        </View>
      ))}
    </>
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
  green: {
    color: '#3EF03E',
  },
  red: {
    color: '#FE4A76',
  },
})