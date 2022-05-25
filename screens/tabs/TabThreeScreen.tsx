import React, { useState } from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { View } from '../../components/Themed';
import MarketCoin from "../../components/MarketCoin";
import PageHeader from '../../components/PageHeader';
import { coinData } from '../../assets/dummyData/coinData';
import { watchlistData } from '../../assets/dummyData/watchlistData';

const componentsToRender = {
  component1: 
    <FlatList
      style={{width: '100%'}}
      data={coinData}
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
      data={coinData.map(item => ({...item})).sort((a, b) => (a.valueChange24H < b.valueChange24H ? 1 : -1))}
      renderItem={({item}) => <MarketCoin marketCoin={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{alignItems: 'center'}}
    />,
}

export default function TabThreeScreen() {
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