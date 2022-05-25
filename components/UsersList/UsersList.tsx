import { View, Text } from '../Themed'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import UserItem from '../UserItem'
import following from '../../assets/dummyData/following'

export default function UsersList() {
  const [users, setUsers] = useState([])

  // console.log(following);

  const displayUsers = () => {
    //
  }

  return (
    <View style={styles.container}>
      {following.map((item, id) => (
        <UserItem user={item} key={id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
})