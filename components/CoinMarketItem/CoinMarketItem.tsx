import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  market: any,
}

export default function CoinMarketItem({ market }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image 
          source={{ uri: market.baseCoinImg }}
          width={10}
          height={10}
          style={styles.image1}
        />
        <Image 
          source={{ uri: market.tradeCoinImg }}
          width={10}
          height={10}
          style={styles.image2}
        />
      </View>
      <View style={styles.marketInfo}>
        <View style={styles.marketSymbol}>
          <Text style={styles.symbol}>{market.baseCoin}</Text>
          <Ionicons name='repeat' size={25} style={styles.icon} />
          <Text style={styles.symbol}>{market.tradeCoin}</Text>
        </View>
        <Text style={styles.marketName}>{market.baseCoinName}{', '}{market.tradeCoinName}</Text>
      </View>
      <View style={styles.tradeInfo}>
        <Text style={styles.tradeValue}>{market.tradeValue}</Text>
        <Text 
          style={[styles.percentGrowth, (market.percentGrowth > 0 ? styles.green : styles.red)]}
        >
          {market.percentGrowth > 0 ? '+' : ''}
          {market.percentGrowth}
          {'%'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  images: {
    flexDirection: 'row',
    flex: 1,
  },
  image1: {
    width: 40,
    height: 40,
    position: 'relative',
    top: 5,
    left: 0,
    borderRadius: 50,
  },
  image2: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'relative',
    top: -5,
    left: -15,
  },
  marketInfo: {
    flex: 2.25,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tradeInfo: {
    flex: 1.5,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  marketSymbol: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    marginHorizontal: 4,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  marketName: {
    fontSize: 16,
    color: '#5A6265',
  },
  tradeValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentGrowth: {},
  green: {
    color: '#3EF03E',
  },
  red: {
    color: '#FE4A76',
  },
})