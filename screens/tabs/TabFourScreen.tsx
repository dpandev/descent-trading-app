import React, { useState, useEffect, useContext } from 'react'
import { ActivityIndicator, StyleSheet} from 'react-native'
import PageHeader from '../../components/PageHeader'
import { View } from '../../components/Themed'
import FollowingScreen from '../FollowingScreen'
import ProfileScreen from '../ProfileScreen'
import RankingsScreen from '../RankingsScreen'
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider'
import { API, graphqlOperation } from 'aws-amplify'
import { getUser } from '../../src/graphql/queries'

export default function TabFourScreen() {
  const { theUser } = useContext(AuthenticatedUserContext)
  // const [ user, setUser] = useState({
  //   id: '1',
  //   name: "Mr. Anderson",
  //   email: 'anderson@matrix.com',
  //   profileImg:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  //   networth: 12312,
  //   totalTrades: 1320,
  //   lastTrade: {
  //     id: 'tuid1',
  //     tradePair: ['BTC', 'USD'],
  //     tradeAmount: '+89.923',
  //     exchangeAmount: '6.13',
  //     percentGrowth: -2.4,
  //     color: '#F8931A',
  //   },
  //   followers: 12032,
  //   createdAt: 'May 2022',
  // })
  const [user, setUser] = useState(theUser)
  const componentsToRender = {
    component1: <ProfileScreen user={user} />,
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getUser, {id: theUser.id})
        )
        setUser(response.data.getUser)
      } catch (e) {
        console.log(e)
      }
    }
    fetchUser()
    return () => {
      setUser(null)
    }
  }, [])

  if (!user) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.root}>
      <PageHeader title={'Social'} buttonsOptions={buttonOptions} />
      {reComp}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
})