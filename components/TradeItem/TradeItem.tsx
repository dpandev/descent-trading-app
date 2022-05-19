import { View, Text } from '../Themed'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import RecentTrades from '../../assets/dummyData/RecentTrades'

export default function TradeItem() { //TODO: assign props and use map() in RecentTrades component
  const [trades, setTrades] = useState([])

  const displayTrades = () => {
    return RecentTrades.map((item, id) => (
      <View style={[styles.container, { borderColor: item.color }]} key={id}>
        <View style={styles.left}>
          <Text style={styles.tradePair}>{item.tradePair[0]}{'-'}{item.tradePair[1]}</Text>
          <Text style={styles.exchangeAmount}>{item.exchangeAmount}{' '}{item.tradePair[0]}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.tradeAmount}>{item.tradeAmount}{' '}{item.tradePair[1]}</Text>
          <Text style={[styles.percentGrowth, item.percentGrowth > 0 ? styles.green : styles.red]}>{item.percentGrowth}{'%'}</Text>
        </View>
      </View>
    ))
  }

  return (
    displayTrades()
  )
}

const bgColor = '#000'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 8,
    backgroundColor: bgColor,
    borderLeftWidth: 4,
    borderColor: '#E0B95B',
    borderRadius: 4,
  },
  left: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: bgColor,
  },
  tradePair: {
    fontSize: 17,
  },
  exchangeAmount: {
    color: '#5A6265',
  },
  right: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: bgColor,
  },
  tradeAmount: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  percentGrowth: {
    color: '#47A877',
  },
  green: {
    color: '#3EF03E',
  },
  red: {
    color: '#FE4A76',
  },
})