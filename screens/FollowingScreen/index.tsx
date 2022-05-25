import React from 'react';
import { Image, FlatList, StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed'
import UserRangeItem from "../../components/UserRankingItem";
import FollowingData from '../../assets/dummyData/FollowingData';
import Searchbar from '../../components/Searchbar';

const FollowingScreen = () => {
  return (
    <View style={styles.root}>
      <Searchbar placeholder={'search for a user'} />
      <FlatList
        style={{width: '100%'}}
        data={FollowingData}
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

export default FollowingScreen;
