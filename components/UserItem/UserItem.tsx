import { View, Text, FollowButton } from '../Themed'
import React from 'react'
import { StyleSheet, Image } from 'react-native'

type Props = {
  user: any,
}

export default function UserItem({ user }: Props) {

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
      </View>
      <View style={styles.buttonContainer}>
        <FollowButton 
          active={true}
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
    justifyContent: 'center',
    marginRight: 15,
    backgroundColor: bgColor,
  },
})