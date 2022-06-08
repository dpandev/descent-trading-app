import React, { useEffect, useState, useContext } from 'react';
import { Image, Pressable, ActivityIndicator } from 'react-native';
import { ElementView, Text, ModifiedButtonInverted, ModifiedButton } from '../../components/Themed'
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { PercentageChange, PreciseMoney } from "../../components/FormattedTextElements";
import CoinPriceGraph from "../../components/CoinPriceGraph";
import {useNavigation, useRoute} from "@react-navigation/native";
import { API, graphqlOperation } from 'aws-amplify';
import { getCoin, listPortfolioCoins } from '../../src/graphql/queries';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

const CoinDetailsScreen = () => {
  const { theUser } = useContext(AuthenticatedUserContext)
  const [starActive, setStarActive] = useState(false)//todo replace with data
  const [buyActive, setBuyActive] = useState(false)
  const [sellActive, setSellActive] = useState(false)
  const [coin, setCoin] = useState(null)
  const [portfolioCoin, setPortfolioCoin] = useState(null)

  const navigation = useNavigation();
  const route = useRoute();

  const fetchCoinData = async () => {
    if (!route.params?.id) {
      return;
    }
    try {
      const response = await API.graphql(graphqlOperation(getCoin, { id: route.params.id }))
      setCoin(response.data.getCoin)
    } catch(error) {
      console.log('error2', error);
    }
  }

  const fetchPortfolioCoinData = async () => {
    console.log('mr.tweedy:', theUser.id)
    console.log('34', route.params?.id);
    if (!route.params?.id) {
      return;
    }
    try {
      const response = await API.graphql(
        graphqlOperation(
          listPortfolioCoins, 
          { filter: {
            and: {
              coinId: { eq: route.params.id },
              userId: { eq: theUser.id }
            }
          }}
        )
      )
      // console.log('res11:', response.data.listPortfolioCoins.items.toString())
      console.log('wow');
      if (response.data.listPortfolioCoins.items.length > 0) {
        setPortfolioCoin(response.data.listPortfolioCoins.items[0])
        console.log('portfolio212' + portfolioCoin + 'milk');
      }
    } catch(error) {
      console.log('error3', error);
    }
  }

  useEffect(() => {
    fetchCoinData()
    fetchPortfolioCoinData()
    console.log('running a marathon');
  }, [])

  const onBuy = () => {
    navigation.navigate('CoinExchange', { isBuy: true, coin, portfolioCoin });
  }

  const onSell = () => {
    navigation.navigate('CoinExchange', { isBuy: false, coin, portfolioCoin });
  }

  const onStarPressed = () => {
    console.log('star pressed');
    setStarActive(prevState => !prevState)
  }

  if (!coin) {
    return <ActivityIndicator />
  }

  return (
    <ElementView style={styles.root}>
      <ElementView style={styles.topContainer}>
        <ElementView style={styles.left}>
          <Image style={styles.image} source={{ uri: coin.image}} />
          <ElementView>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
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
          <PreciseMoney value={coin.currentPrice} style={styles.value} />
        </ElementView>

        <ElementView style={{flexDirection: 'row'}}>
          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={coin.valueChange1H} />
          </ElementView>

          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={coin.valueChange24H} />
          </ElementView>

          <ElementView style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coin.valueChange7D} />
          </ElementView>
        </ElementView>
      </ElementView>

      {coin?.priceHistoryString 
        && <CoinPriceGraph dataString={coin.priceHistoryString} />}

      <ElementView style={[styles.row, {justifyContent: 'space-evenly'}]}>
        <Text style={styles.positionLabel}>Position</Text>
        <ElementView>
          <Text>
            {portfolioCoin?.amount.toLocaleString('en-US') || 0} {coin.symbol}
            {/* {' '} */}
            {/* (<PreciseMoney value={coin.currentPrice * (portfolioCoin?.amount || 0)} />) */}
          </Text>
          <ElementView style={styles.rowText}>
            <PreciseMoney value={coin.currentPrice * (portfolioCoin?.amount || 0)} />
            <Text> USD</Text>
          </ElementView>
        </ElementView>
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
