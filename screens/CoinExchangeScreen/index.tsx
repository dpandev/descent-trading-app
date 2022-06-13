import React, {useEffect, useState, useContext} from 'react';
import {
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { ElementView, ModifiedButtonInverted, Text } from '../../components/Themed';
import { PreciseMoney } from '../../components/FormattedTextElements';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigation, useRoute } from '@react-navigation/native';
import { listPortfolioCoins } from '../../src/graphql/queries';
import { exchangeCoins } from './mutations';
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider';

const USD_COIN_ID = 'usd';//TODO remove

const CoinExchangeScreen = () => {
  const [activeButton, setActiveButton] = useState(false)

  const [coinAmount, setCoinAmount] = useState('')
  const [coinUSDValue, setCoinUSDValue] = useState('')
  const [usdPortfolioCoin, setUsdPortfolioCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const maxUSD = 100000;
  const { theUser } = useContext(AuthenticatedUserContext)
  const userId = theUser.id

  const navigation = useNavigation();
  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coin = route?.params?.coin;
  const portfolioCoin = route?.params?.portfolioCoin;

  const getUSDPortfolioCoin = async () => {
    try {
      const response = await API.graphql(
        graphqlOperation(listPortfolioCoins,
          { filter: {
              and: {
                coinId: { eq: USD_COIN_ID },
                userId: { eq: userId }
              }
            }
          }
        )
      )
      if (response.data.listPortfolioCoins.items.length > 0) {
        setUsdPortfolioCoin(response.data.listPortfolioCoins.items[0]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUSDPortfolioCoin();
  }, [])

  useEffect(() => {
    const amount = parseFloat(coinAmount)
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinUSDValue((amount * coin?.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDValue)
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinAmount((amount / coin?.currentPrice).toString());
  }, [coinUSDValue]);

  const onSellAll = () => {
    setCoinAmount(portfolioCoin.amount);
  }

  const onBuyAll = () => {
    setCoinUSDValue(usdPortfolioCoin?.amount || 0);
  }

  const placeOrder = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const variables = {
        coinId: coin.id,
        isBuy,
        amount: parseFloat(coinAmount),
        usdPortfolioCoinId: usdPortfolioCoin?.id,
        coinPortfolioCoinId: portfolioCoin?.id,
        userId: theUser.id
      }

      const response = await API.graphql(
        graphqlOperation(exchangeCoins, variables)
      )
      if (response.data.exchangeCoins) {
        navigation.navigate('TabTwo');
      } else {
        Alert.alert('Error', 'There was an error exchanging coins');
      }
    } catch (e) {
      Alert.alert('Error', 'There was an error exchanging coins');
      console.error(e);
    }
    setIsLoading(false);
  }

  const onPlaceOrder = async () => {
    const maxUsd = usdPortfolioCoin?.amount || 0;
    if (isBuy && parseFloat(coinUSDValue) > maxUsd) {
      Alert.alert('Error', `Not enough USD coins. Max: ${maxUsd}`);
      return;
    }
    if (!isBuy && (!portfolioCoin || parseFloat(coinAmount) > portfolioCoin.amount)) {
      Alert.alert('Error', `Not enough ${coin.symbol} coins. Max: ${portfolioCoin.amount || 0}`);
      return;
    }

    await placeOrder();
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.title}>
        {isBuy ? 'Buy ' : "Sell "}
        {coin?.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coin?.symbol}
        {' = '}
        <PreciseMoney value={coin?.currentPrice} />
      </Text>

      <ElementView style={styles.inputsContainer}>
        <Text style={{color: 'white'}}>{coin?.symbol}</Text>
        <ElementView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            placeholder="0"
            placeholderTextColor={'#b1b1b1'}
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
        </ElementView>
        <Text style={{fontSize: 30}}>=</Text>

        <ElementView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            placeholder="0"
            placeholderTextColor={'#b1b1b1'}
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
          />
        </ElementView>
        <Text>USD</Text>
      </ElementView>

      <ModifiedButtonInverted 
        onPress={onPlaceOrder}
        text={'Place Order'}
        textStyles={styles.buttonText}
        buttonStyles={styles.button}
        activePress={activeButton}
        onPressChange={setActiveButton}
      />
      {isLoading && <ActivityIndicator color={'white'} />}
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
