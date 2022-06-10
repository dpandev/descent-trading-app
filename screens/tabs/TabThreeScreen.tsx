import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet} from 'react-native'
import { Text, View } from '../../components/Themed'
import MarketCoin from "../../components/MarketCoin"
import PageHeader from '../../components/PageHeader'
import { API, graphqlOperation } from 'aws-amplify'
import { listCoins } from '../../src/graphql/queries'

import { watchlistData } from '../../assets/dummyData/watchlistData'

export default function TabThreeScreen() {
  const [allCoins, setAllCoins] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleEmptyList = () => {
    return <Text style={styles.noDataMsg}>pull down to refresh</Text>
  }

  const fetchCoins = async () => {
    setIsLoading(true)
    console.log('loading...')
    try {
      const response = await API.graphql(graphqlOperation(listCoins))
      setAllCoins(response.data.listCoins.items)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
      console.log('finished...')
    }
  }

  const componentsToRender = {
    component1:
      <FlatList
        style={{width: '100%'}}
        data={allCoins}
        onRefresh={fetchCoins}
        refreshing={isLoading}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListEmptyComponent={handleEmptyList}
        extraData={allCoins}
      />,
    component2: 
      <FlatList
        style={{width: '100%'}}
        data={watchlistData}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
      />,
    component3:
      <FlatList
        style={{width: '100%'}}
        data={allCoins.map(item => ({...item})).sort((a, b) => (a.valueChange24H < b.valueChange24H ? 1 : -1))}
        onRefresh={fetchCoins}
        refreshing={isLoading}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
      />,
  }

  const [reComp, setReComp] = useState(componentsToRender.component1)
  const searchbarOptions = {
    placeholder: 'search a coin',
  }

  const buttonOptions  = {
    buttons: [
      {
        name: 'All',
        component: componentsToRender.component1,
      },
      {
        name: 'Watchlist',
        component: componentsToRender.component2,
      },
      {
        name: 'Trending',
        component: componentsToRender.component3,
      }
    ],
    setRenderComp: setReComp,
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  useEffect(() => {//remounts component on initial render once state is updated with data
    if (reComp.props.data.length === 0 
      && allCoins.length != 0
      && reComp.props.extraData != undefined) {
      setReComp(componentsToRender.component1)
    }
  }, [!isLoading])

  return (
    <View style={styles.root}>
      <PageHeader title={'Trading'} buttonsOptions={buttonOptions} searchbarOptions={searchbarOptions} />
      {reComp}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  noDataMsg: {
    textAlign: 'center',
    color: '#FE4A76',
  },
})