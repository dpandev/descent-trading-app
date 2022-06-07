import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { View } from '../../components/Themed';
import MarketCoin from "../../components/MarketCoin";
import PageHeader from '../../components/PageHeader';
import { API, graphqlOperation } from 'aws-amplify';

import { watchlistData } from '../../assets/dummyData/watchlistData';

import { listCoins } from '../../src/graphql/queries';

export default function TabThreeScreen() {
  const [allCoins, setAllCoins] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCoins = async () => {
    setLoading(true)
    try {
      const response = await API.graphql(graphqlOperation(listCoins))
      setAllCoins(response.data.listCoins.items)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const componentsToRender = {
    component1: 
      <FlatList
        style={{width: '100%'}}
        data={allCoins}
        onRefresh={fetchCoins}
        refreshing={loading}
        renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
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
        refreshing={loading}
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
    console.log('refreshed allcoins')
  }, [])

  return (
    <View style={styles.root}>
      <PageHeader title={'Trading'} buttonsOptions={buttonOptions} searchbarOptions={searchbarOptions} />
      {reComp}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});