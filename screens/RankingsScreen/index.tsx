import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed'
import UserRangeItem from "../../components/UserRankingItem";
import FollowingData from '../../assets/dummyData/FollowingData';
import Searchbar from '../../components/Searchbar';

const RankingsScreen = () => {
  const [isLoading, setIsLoading] = useState(false)

  const temp = () => {
    setIsLoading(false)
  }

  const fetchUsers = () => {
    // setIsLoading(true)
    // setTimeout(temp, 500)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.root}>
      <Searchbar placeholder={'search for a user'} />
      <FlatList
        style={{width: '100%'}}
        onRefresh={fetchUsers}
        refreshing={isLoading}
        data={FollowingData.map(item => ({...item})).sort((a, b) => (a.assets < b.assets) ? 1 : -1)}
        renderItem={({item, index}) => <UserRangeItem user={item} place={index + 1} />}
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

export default RankingsScreen;
