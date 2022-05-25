import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ElementView, Text, ModifiedListItemButton } from '../Themed'
import { PercentageChange, PreciseMoney } from "../FormattedTextElements";

export interface MarketCoinProps {
  marketCoin: {
    image: string,
    name: string,
    symbol: string,
    valueChange24H: number,
    valueUSD: number,
  }
}

export default function MarketCoin (props: MarketCoinProps) {
  const navigation = useNavigation();
  const [itemActivePress, setItemActivePress] = useState(false)

  const {
    marketCoin: {
      image,
      name,
      symbol,
      valueChange24H,
      valueUSD,
    },
  } = props;

  const onPressed = () => {
    console.log('pressed market item')
    navigation.navigate('CoinDetails')
  }

  return (
    <ModifiedListItemButton 
      buttonStyles={styles.root} 
      onPress={onPressed}
      activePress={itemActivePress}
      onPressChange={setItemActivePress}
    >
      <ElementView style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <ElementView>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </ElementView>
      </ElementView>
      <ElementView style={{alignItems: 'flex-end'}}>
        <PreciseMoney value={valueUSD} style={styles.value} />
        <PercentageChange value={valueChange24H} />
      </ElementView>
    </ModifiedListItemButton>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  symbol: {
    color: '#959595',
  },
});
