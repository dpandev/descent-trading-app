import { View, Text, FollowButton } from '../Themed'
import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Networth } from '../FormattedTextElements'

type Props = {
  user: any,
}

export default function UserItem({ user }: Props) {//TODO delete, not in use?
  const [following, setFollowing] = useState(user.following)

  const onFollowBtn = () => {
    console.log('clicked follow btn');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user.profilePic }} 
        width={25}
        height={25}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.username}</Text>
        <Text style={user.assets > 0 ? styles.green : styles.red}>
          {user.assets > 0 ? '$' : '-$'}
          {Math.abs(user.assets).toLocaleString("en-US")}
        </Text>
        {/* <Networth value={user.assets} /> */}
      </View>
      <View style={styles.buttonContainer}>
        <FollowButton 
          active={following}
          text={'Following'}
          onPress={() => onFollowBtn()}
        />
      </View>
    </View>
  )
}

const bgColor = '#1A1C2A';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: bgColor,
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 6,
    maxWidth: 400,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  userInfo: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: bgColor,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  green: {
    color: '#3EF03E',
  },
  red: {
    color: '#FE4A76',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    backgroundColor: bgColor,
  },
})