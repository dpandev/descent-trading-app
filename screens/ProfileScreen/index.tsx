import { StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { View, Text, ModifiedButtonInverted } from '../../components/Themed'
import { Networth } from '../../components/FormattedTextElements'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen({user}: any) {
  const navigation = useNavigation()
  const [settingsActive, setSettingsActive] = useState(false)

  const onSettingsPressed = () => {
    console.log("Settings")
    navigation.navigate('Settings')
  }

  return (
    <View style={styles.root}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: user.profileImg }} 
          width={50}
          height={50}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{user.username}</Text>
          <Text style={styles.profileText}>
            Net Worth: {''}
            <Networth value={user.assets} />
          </Text>
          <Text style={styles.profileText}>
            Total Trades: {''}
            <Text style={styles.profileTextData}>{user.totalTrades.toLocaleString('en-US')}</Text>
          </Text>
          <Text style={styles.profileText}>
            Last Trade: {''}
            <Text style={styles.profileTextData}>
              {user.lastTrade.tradePair[0]}{' - '}{user.lastTrade.tradePair[1]}
            </Text>
          </Text>
          <Text style={styles.profileText}>
            Followers: {''}
            <Text style={styles.profileTextData}>{user.followers.toLocaleString('en-US')}</Text>
          </Text>
          <Text style={styles.profileText}>
            Member Since: {''}
            <Text style={styles.profileTextData}>{user.createdAt}</Text>
          </Text>
        </View>
      </View>
      <ModifiedButtonInverted 
        onPress={onSettingsPressed} 
        text={"Settings"} 
        activePress={settingsActive} 
        onPressChange={setSettingsActive} 
        buttonStyles={styles.settings}
        textStyles={{ fontSize: 16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
  },
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
  settings: {
    marginTop: 'auto',
    maxWidth: '45%',
  },
})