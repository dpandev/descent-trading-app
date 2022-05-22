import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet } from 'react-native'

type Props = {
  item: Object
}

export default function PortfolioAssetItem({ item }: Props) {
  return (
    <View>
      <Text>PortfolioAssetItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})