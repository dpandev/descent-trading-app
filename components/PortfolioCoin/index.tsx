import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ElementView, Text, ModifiedListItemButton } from '../../components/Themed'
import { PreciseMoney } from '../FormattedTextElements';

export interface PortfolioCoinProps {
  portfolioCoin: {
    coin: {
      id: string,
      image: string,
      name: string,
      symbol: string,
      currentPrice: number,
    }
    amount: number,
  }
}

export default function PortfolioCoin (props: PortfolioCoinProps) {
  const [itemActivePress, setItemActivePress] = useState(false)
  const {
    portfolioCoin: {
      amount,
      coin: {
        id,
        image,
        name,
        symbol,
        currentPrice
      }
    },
  } = props;

  const navigation = useNavigation();

  return (
    <ModifiedListItemButton 
      buttonStyles={styles.root} 
      onPress={() => navigation.navigate('CoinDetails', { id })}
      activePress={itemActivePress}
      onPressChange={setItemActivePress}
    >
      <ElementView style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <ElementView>
          <Text style={styles.currency}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </ElementView>
      </ElementView>
      <ElementView style={styles.right}>
        <PreciseMoney value={currentPrice * amount} style={styles.value} />
        <Text style={styles.symbol}>{amount} {symbol}</Text>
      </ElementView>
    </ModifiedListItemButton>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 6,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  symbol: {
    color: '#959595',
  },
  right: {
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
});

