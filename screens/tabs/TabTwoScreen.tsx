import { StyleSheet, FlatList } from 'react-native'
import { View, ElementView } from '../../components/Themed'
import PortfolioCoin from '../../components/PortfolioCoin'
import PageHeader from '../../components/PageHeader'
import { PreciseMoney } from '../../components/FormattedTextElements'
import { useContext, useState, useEffect } from 'react'
import { AuthenticatedUserContext } from '../../navigation/AuthenticatedUserProvider'
import { API, graphqlOperation } from 'aws-amplify'
import { getUserPortfolio } from './queries'

export default function TabTwoScreen() {
  const [portfolioCoins, setPortfolioCoins] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {theUser} = useContext(AuthenticatedUserContext)

  const fetchAssets = async () => {
    setIsLoading(true)
    try {
      const response = await API.graphql(
        graphqlOperation(
          getUserPortfolio,
          { id: theUser.id },
        )
      )
      setPortfolioCoins(response.data.getUser.portfolioCoins.items)
      setUserInfo(response.data.getUser)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAssets()
  }, [])

  return (
    <View style={styles.root}>
      <PageHeader title={"Assets"} />
      <ElementView style={styles.balanceContainer}>
        <PreciseMoney value={userInfo?.networth || 0} style={styles.balance} />
      </ElementView>
      <FlatList
        style={{width: '100%'}}
        data={portfolioCoins}
        // keyExtractor={(item, index) => item.id}
        onRefresh={fetchAssets}
        refreshing={isLoading}
        renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
      />
    </View>
  )
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
    color: '#6338F1',
  },
})
