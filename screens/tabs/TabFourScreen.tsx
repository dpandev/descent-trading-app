import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, StyleSheet} from 'react-native';
import PageHeader from '../../components/PageHeader';
import { View } from '../../components/Themed'
import FollowingScreen from '../FollowingScreen';
import ProfileScreen from '../ProfileScreen';
import RankingsScreen from '../RankingsScreen';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

export default function TabFourScreen() {
  const { user } = useContext(AuthenticatedUserContext)
  const [ userx, setUserx] = useState({
    id: '1',
    username: "Mr. Anderson",
    email: 'anderson@matrix.com',
    profileImg:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    assets: 12312,
    totalTrades: 1320,
    lastTrade: {
      id: 'tuid1',
      tradePair: ['BTC', 'USD'],
      tradeAmount: '+89.923',
      exchangeAmount: '6.13',
      percentGrowth: -2.4,
      color: '#F8931A',
    },
    followers: 12032,
    createdAt: 'May 2022',
  })
  console.log(user)
  const componentsToRender = {
    component1: <ProfileScreen userId={user.attributes.sub} />,
    component2: <FollowingScreen />,
    component3: <RankingsScreen />,
  }

  const [reComp, setReComp] = useState(componentsToRender.component1)
  const buttonOptions  = {
    buttons: [
      {
        name: 'Profile',
        component: componentsToRender.component1,
      },
      {
        name: 'Following',
        component: componentsToRender.component2,
      },
      {
        name: 'Rankings',
        component: componentsToRender.component3,
      }
    ],
    setRenderComp: setReComp,
  }

  if (!user) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.root}>
      <PageHeader title={'Social'} buttonsOptions={buttonOptions} />
      {reComp}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
});