import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CoinList from '../../components/CoinList';
import PageHeader from '../../components/PageHeader';
import { ScrollView, Text, View } from '../../components/Themed';

export default function TabThreeScreen() {
  const [reComp, setReComp] = useState(<CoinList sorted={false} isWatchList={false} />)
  const searchbarOptions = {
    placeholder: 'search a coin',
  }
  const buttonOptions  = {
    buttons: [
      {
        name: 'All',
        component: <CoinList sorted={false} isWatchList={false} />,
      },
      {
        name: 'Watchlist',
        component: <CoinList sorted={false} isWatchList={true} />,
      },
      {
        name: 'Trending',
        component: <CoinList sorted={true} isWatchList={false} />,
      }
    ],
    setRenderComp: setReComp,
  }

  return (
    <View style={styles.container}>
      <PageHeader title={'Trading'} buttonsOptions={buttonOptions} searchbarOptions={searchbarOptions} />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.markets}
        // contentContainerStyle={{ alignItems: 'center' }}
      >
        {reComp}
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
