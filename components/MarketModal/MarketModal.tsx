import { Platform, Pressable, StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import React, { useState } from 'react';

type Props = {
  market: any;
}

export default function MarketModal({ market }: Props) {
  const [activeBtn, setActiveBtn] = useState('')

  const onPress = () => {
    // navigation.goBack()
  }

  console.log(market);

  const changeBtnColors = (value: string) => {
    setActiveBtn(value)
  }

  const handleSell = () => {
    console.log('selling');
  }

  const handleBuy = () => {
    console.log('buying');
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text>MarketModal</Text>
      </View>
      <View style={styles.chartContainer}>
        <Text>todo chart goes here</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>todo other info here</Text>
      </View>
      <View style={styles.tradeButtons}>
        <Pressable 
          style={[styles.tradeBtn, styles.sellBtn, (activeBtn === 'sell' ? { backgroundColor: '#FE7A9A' } : null) ]}
          onPress={handleSell}
          onPressIn={() => changeBtnColors('sell')}
          onPressOut={() => changeBtnColors('')}
        >
          <Text style={styles.bold}>Sell</Text>
          <Text>{' '}{'45,795.32'}</Text>
        </Pressable>
        <Pressable 
          style={[styles.tradeBtn, styles.buyBtn, (activeBtn === 'buy' ? { backgroundColor: '#6A81FC' } : null)]}
          onPress={handleBuy}
          onPressIn={() => changeBtnColors('buy')}
          onPressOut={() => changeBtnColors('')}
        >
          <Text style={styles.bold}>Buy</Text>
          <Text>{' '}{'45,795.23'}</Text>
        </Pressable>
      </View>
    </View>
    // <Pressable style={styles.container} onPress={onPress}>
    //   <Text style={styles.title}>MarketModal</Text>
    // </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    marginVertical: 50,
  },
  chartContainer: {},
  infoContainer: {},
  tradeButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    marginVertical: 15,
  },
  tradeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
  },
  sellBtn: {
    backgroundColor: '#FF4E78',
  },
  buyBtn: {
    backgroundColor: '#4462FF',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});