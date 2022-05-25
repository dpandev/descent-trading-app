import { View, Text } from '../Themed'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import PortfolioAssetItem from '../PortfolioAssetItem'
import ProfileAssets from '../../assets/dummyData/ProfileAssets'

export default function Portfolio() {
  const [assetsList, setAssetsList] = useState([{}])

  const sortedList = () => {
    const baba = ProfileAssets.slice()
    const sortedByROI =  baba.sort((a, b) => (a.roiValue < b.roiValue) ? 1 : -1)
    // setAssetsList(baba.sort((a, b) => (a.roiValue < b.roiValue) ? 1 : -1))
    return (
      <View style={styles.container}>
        <View style={styles.account}>
          <Text style={styles.title}>Current Wallet Balance</Text>
          <Text style={styles.balance}>$60,300,102.54</Text>
        </View>
        {sortedByROI.map((item, id) => (
          <PortfolioAssetItem item={item} key={id} />
        ))}
      </View>
    )
  }

  return (
    <View>
      {sortedList()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  account: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    marginVertical: 5,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})