import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet } from 'react-native'

type Props = {
  item: any
}

export default function PortfolioAssetItem({ item }: Props) {
  return (
    <View style={[styles.container, { borderColor: item.color }]}>
      <View style={styles.left}>
        <Text style={styles.tradePair}>{item.name}</Text>
        <Text style={styles.exchangeAmount}>{item.amountHeld.toLocaleString('en-US')}{' '}{item.coin}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.tradeAmount}>{'$'}{item.valueInUSD.toLocaleString('en-US')}{' USD'}</Text>
        <Text style={[styles.percentGrowth, item.roiValue > 0 ? styles.green : styles.red]}>
          {item.roiValue > 0 ? '+' : ''}
          {item.roiValue.toLocaleString('en-US')}
          </Text>
      </View>
    </View>
  )
}

const bgColor = '#000'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 5,
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