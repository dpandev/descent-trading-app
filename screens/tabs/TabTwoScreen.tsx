import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View, ScrollView, ModifiedButton } from '../../components/Themed';
import Portfolio from '../../components/Portfolio';
import RecentTrades from '../../components/RecentTrades';
import PageHeader from '../../components/PageHeader';

export default function TabTwoScreen({ navigation }: any) {
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
    navigation.navigate('Store')
  }

  return (
    <View style={styles.page}>
      {/* <PageHeader title={'Wallet'} /> */}
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
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={{ width: '100%' }}
      >
        <View style={styles.portfolioContainer}>
          {topButton === 'assets'
            ? <Portfolio />
            : <RecentTrades />
          }
        </View>
        <View style={styles.addMoreBtn}>
          <ModifiedButton 
            active={addAssetsButtonStyle}
            text='Add more'
            onPress={() => handleAddMore()}
            onPressIn={changeButtonStyle}
            onPressOut={changeButtonStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    padding: 15,
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
  addMoreBtn: {
    alignItems: 'center',
  },
  portfolioContainer: {},
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
