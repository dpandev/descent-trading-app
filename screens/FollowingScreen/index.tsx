import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from '../../components/Themed'
import UserRankingItem from "../../components/UserRankingItem";
import FollowingData from '../../assets/dummyData/FollowingData';
import Searchbar from '../../components/Searchbar';

const FollowingScreen = () => {
  const [isLoading, setIsLoading] = useState(false)

  const temp = () => {
    setIsLoading(false)
  }

  const fetchUsers = () => {
    // setIsLoading(true)
    // setTimeout(temp, 100)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.root}>
      <Searchbar placeholder={'search for a user'} />
      <FlatList
        style={{width: '100%'}}
        data={FollowingData.filter((item) => item.following)}
        onRefresh={fetchUsers}
        refreshing={isLoading}
        renderItem={({item, index}) => <UserRankingItem user={item} place={index + 1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FollowingScreen;
