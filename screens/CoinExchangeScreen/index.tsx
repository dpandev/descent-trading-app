import React, {useEffect, useState} from 'react';
import {
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { ElementView, ModifiedButtonInverted, Text } from '../../components/Themed';
import { PreciseMoney } from '../../components/FormattedTextElements';


const CoinExchangeScreen = () => {
  const [activeButton, setActiveButton] = useState(false)

  const [coinAmount, setCoinAmount] = useState('')
  const [coinUSDValue, setCoinUSDValue] = useState('')

  const maxUSD = 100000;

  const route = useRoute();

  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount)
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinUSDValue((amount * coinData?.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinUSDValue)
    if (!amount && amount !== 0) {
      setCoinAmount("");
      setCoinUSDValue("");
      return;
    }
    setCoinAmount((amount / coinData?.currentPrice).toString());
  }, [coinUSDValue]);

  const onPlaceOrder = () => {
    if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
      Alert.alert('Error', `Not enough USD coins. Max: ${maxUSD}`);
      return;
    }
    if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
      Alert.alert('Error', `Not enough ${coinData.symbol} coins. Max: ${coinData.amount}`);
      return;
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.title}>
        {isBuy ? 'Buy ' : "Sell "}
        {coinData?.name}
      </Text>
      <Text style={styles.subtitle}>
        1 {coinData?.symbol}
        {' = '}
        <PreciseMoney value={coinData?.currentPrice} />
      </Text>

      <ElementView style={styles.inputsContainer}>
        <ElementView style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinAmount}
            onChangeText={setCoinAmount}
          />
          <Text>{coinData?.symbol}</Text>
        </ElementView>
        <Text style={{fontSize: 30}}>=</Text>

        <ElementView style={styles.inputContainer}>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="0"
            value={coinUSDValue}
            onChangeText={setCoinUSDValue}
          />
          <Text>USD</Text>
        </ElementView>
      </ElementView>

      <ModifiedButtonInverted 
        onPress={onPlaceOrder}
        text={'Place Order'}
        textStyles={styles.buttonText}
        buttonStyles={styles.button}
        activePress={activeButton}
        onPressChange={setActiveButton}
      />
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
