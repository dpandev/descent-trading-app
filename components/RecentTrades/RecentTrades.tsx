import { StyleSheet } from 'react-native'
import React from 'react'
import { View, Text } from '../Themed'
import TradeItem from '../TradeItem'

export default function RecentTrades() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Trades</Text>
      <TradeItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})