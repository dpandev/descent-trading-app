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
      sortedByROI.map((item, id) => (
        <PortfolioAssetItem item={item} key={id} />
      ))
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
})