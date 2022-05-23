import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CoinList from '../../components/CoinList';
import PageHeader from '../../components/PageHeader';
import { ScrollView, Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  const [topButtons, setTopButtons] = useState(['All', 'Watchlist', 'Trending'])
  const [activeButton, setActiveButton] = useState('all')
  const buttonOptions = {
    text: topButtons,
    callback: setActiveButton,
  }
  const searchbarOptions = {
    placeholder: 'search a coin',
  }
 
  const renderView = (value: string) => {
    if (value === topButtons[0]) {
      return <CoinList sorted={false} isWatchList={false} />
    } else if (value === topButtons[1]) {
      return <CoinList sorted={false} isWatchList={true} />
    } else if (value === topButtons[2]) {
      return <CoinList sorted={true} isWatchList={false} />
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader title={'Trading'} buttonsOptions={buttonOptions} searchbarOptions={searchbarOptions} />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.markets}
        // contentContainerStyle={{ alignItems: 'center' }}
      >
        {renderView(activeButton)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  markets: {
    width: '95%',
    backgroundColor: 'red',
  },
  test: {
    backgroundColor: 'red',
    color: 'blue',
  },
});
