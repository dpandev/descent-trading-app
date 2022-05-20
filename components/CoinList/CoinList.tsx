import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import coinmarket from '../../assets/dummyData/coinmarket'
import CoinMarketItem from '../CoinMarketItem'
import WatchList from '../WatchList'

type Props = {
  marketsData?: Array<Object>;
  valueToSort?: any;
  sorted: boolean;
  isWatchList: boolean;
}

export default function CoinList({ marketsData, valueToSort, sorted, isWatchList }: Props) {

  const unsortedList = () => {
    return (
      coinmarket.map((item, id) => (
        <CoinMarketItem market={item} key={id} />
      ))
    )
  }

  const sortedList = () => {
    const baba = coinmarket.slice()
    const sortedByPercentGrowth = baba.sort((a, b) => (a.percentGrowth < b.percentGrowth) ? 1 : -1)
    return (
      sortedByPercentGrowth.map((item, id) => (
        <CoinMarketItem market={item} key={id} />
      ))
    )
  }

  const watchlist = () => {
    return <WatchList />
  }

  const notWatchlist = () => {
    return (sorted ? sortedList() : unsortedList())
  }

  return (
    <View style={styles.container}>
      { isWatchList ? watchlist() : notWatchlist() }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})