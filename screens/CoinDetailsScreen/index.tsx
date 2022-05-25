import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { ElementView, Text, ModifiedButtonInverted, ModifiedButton } from '../../components/Themed'
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { PercentageChange, PreciseMoney } from "../../components/FormattedTextElements";
import CoinPriceGraph from "../../components/CoinPriceGraph";
import {useNavigation} from "@react-navigation/native";
import priceHistory from '../../assets/dummyData/priceHistory'

const CoinDetailsScreen = () => {
  const [starActive, setStarActive] = useState(false)//todo replace with data
  const [buyActive, setBuyActive] = useState(false)
  const [sellActive, setSellActive] = useState(false)
  const [coinData, setCoinData] = useState({
    id: '1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    name: 'Bitcoin',
    symbol: 'BTC',
    valueChange24H: -1.12,
    valueChange1D: 2.12,
    valueChange7D: -1.12,
    currentPrice: 59420,
    amount: 2,
  })

  const navigation = useNavigation();

  const onBuy = () => {
    navigation.navigate('CoinExchange', { isBuy: true, coinData });
  }

  const onSell = () => {
    navigation.navigate('CoinExchange', { isBuy: false, coinData });
  }

  const onStarPressed = () => {
    console.log('star pressed');
    setStarActive(prevState => !prevState)
  }

  return (
    <ElementView style={styles.root}>
      <ElementView style={styles.topContainer}>
        <ElementView style={styles.left}>
          <Image style={styles.image} source={{ uri: coinData.image}} />
          <ElementView>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </ElementView>
        </ElementView>
        <ElementView style={{alignItems: 'flex-end'}}>
          <Pressable
            onPress={onStarPressed}
          >
            <Octicons name={starActive ? 'star-fill' : 'star'} size={30} color={'#6338F1'} />
          </Pressable>
        </ElementView>
      </ElementView>

      <ElementView style={styles.row}>
        <ElementView style={styles.valueContainer}>
          <Text style={styles.label}>Current price</Text>
          <PreciseMoney value={coinData.currentPrice} style={styles.value} />
        </ElementView>

        <ElementView style={{flexDirection: 'row'}}>
          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={coinData.valueChange24H} />
          </ElementView>

          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={coinData.valueChange1D} />
          </ElementView>

          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coinData.valueChange7D} />
          </ElementView>
        </ElementView>
      </ElementView>

      <CoinPriceGraph dataString={priceHistory} />

      <ElementView style={[styles.row, {justifyContent: 'space-evenly'}]}>
        <Text style={styles.positionLabel}>Position</Text>
        <Text>
          {coinData.amount} {coinData.symbol}
          {' '}
          (<PreciseMoney value={coinData.currentPrice * coinData.amount} />)
        </Text>
      </ElementView>

      <ElementView style={[styles.row, { marginTop: 'auto' }]}>
        <ModifiedButtonInverted 
          onPress={onBuy}
          text={"Buy"}
          textStyles={styles.buttonText}
          buttonStyles={styles.button}
          active={buyActive}
          onPressChange={setBuyActive}
        />
        <ModifiedButtonInverted 
          onPress={onSell}
          text={"Sell"}
          textStyles={styles.buttonText}
          buttonStyles={styles.button}
          active={sellActive}
          onPressChange={setSellActive}
        />
      </ElementView>

    </ElementView>
  );
};

export default CoinDetailsScreen;
