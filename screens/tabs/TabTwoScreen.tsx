import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View, ScrollView, ModifiedButton } from '../../components/Themed';
import Portfolio from '../../components/Portfolio';

export default function TabTwoScreen() {
  const [topButton, setTopButton] = useState('assets')
  const [addAssetsButtonStyle, setAddAssetsButtonStyle] = useState(false)

  const handleTopButton = (value: string) => {
    setTopButton(value)
  }

  const changeButtonStyle = () => {
    setAddAssetsButtonStyle(prevState => !prevState)
  }

  const handleAddMore = () => {
    console.log('add more assets');
  }

  return (
    <View style={styles.page}>
      <View style={styles.topButtonsContainer}>
        <ModifiedButton
          active={topButton === 'assets'}
          text='Assets' 
          onPress={() => handleTopButton('assets')}
        />
        <ModifiedButton
          active={topButton === 'history'}
          text='History' 
          onPress={() => handleTopButton('history')} 
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Wallet page</Text>
        <View style={styles.portfolioContainer}>
          <Portfolio />
        </View>
        <ModifiedButton 
          active={addAssetsButtonStyle}
          text='Add more assets'
          onPress={() => handleAddMore()}
          onPressIn={changeButtonStyle}
          onPressOut={changeButtonStyle}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addMoreBtnText: {},
  addMoreBtn: {},
  portfolioContainer: {},
});
