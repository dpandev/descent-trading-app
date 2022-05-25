import { StyleSheet, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import PortfolioCoin from '../../components/PortfolioCoin';
import PageHeader from '../../components/PageHeader';
import { PreciseMoney } from '../../components/FormattedTextElements';
import { portfolioData } from '../../assets/dummyData/portfolioData';


export default function TabTwoScreen() {
  return (
    <View style={styles.root}>
      <PageHeader title={"Assets"} />
      <FlatList
        style={{width: '100%'}}
        data={portfolioData}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <PortfolioCoin coin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <View style={styles.balanceContainer}>
              <PreciseMoney value={69420} style={styles.balance} />
            </View>
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  balanceContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {},
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    width: '85%',
    textAlign: 'center',
    color: '#7A5AE7',
  },
});
