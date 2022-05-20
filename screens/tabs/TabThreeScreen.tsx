import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CoinList from '../../components/CoinList';
import Searchbar from '../../components/Searchbar';
import { ModifiedButton, ScrollView, Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  const [headerButton, setHeaderButton] = useState('all')

  const onHeaderButton = (value: string) => {
    setHeaderButton(value)
  }
  
  const renderComponent = () => {
    if (headerButton === 'all') {
      return <CoinList sorted={false} isWatchList={false} />
    } else if (headerButton === 'watchlist') {
      return <CoinList sorted={false} isWatchList={true} />
    } else if (headerButton === 'top') {
      return <CoinList sorted={true} isWatchList={false} />
    }
    return <Text>hi</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Searchbar placeholder='search coins'/>
        </View>
        <Text style={styles.title}>Trading</Text>
        <View style={styles.headerButtonsContainer}>
          <ModifiedButton 
            active={headerButton === 'all'}
            text='All Coins'
            onPress={() => onHeaderButton('all')}
            buttonStyles={styles.headerButton}
          />
          <ModifiedButton 
            active={headerButton === 'watchlist'}
            text='Watchlist'
            onPress={() => onHeaderButton('watchlist')}
            buttonStyles={styles.headerButton}
          />
          <ModifiedButton 
            active={headerButton === 'top'}
            text='Top Rising'
            onPress={() => onHeaderButton('top')}
            buttonStyles={styles.headerButton}
          />
        </View>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.markets}
        // contentContainerStyle={{ alignItems: 'center' }}
      >
        {renderComponent()}
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
  header: {
    width: '90%',
    marginTop: 20,
  },
  search: {
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: '#1A1C2A',
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
  },
  headerButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 12,
    // width: '30%',
    borderWidth: 0,
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
