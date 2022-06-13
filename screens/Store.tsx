import { View, Text } from '../components/Themed'
import React, { useState } from 'react'
import { StyleSheet, Image, Pressable } from 'react-native'
import PurchaseItems from '../assets/dummyData/PurchaseItems'

type Props = {
  item: any,
}

function StoreItem({ item }: Props) {
  const onItemPress = (value: string) => {
    console.log('purchase item selected: ', value);
  }

  return (
    <Pressable style={styles.itemContainer} onPress={() => onItemPress(item.id)}>
      <Image
        source={{ uri: item.image}}
        width={25}
        height={25}
        style={styles.itemImage}
      />
      <View style={styles.info}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
      <Text style={styles.itemPrice}>{'$'}{item.price}</Text>
    </Pressable>
  )
}

export default function Store() {
  const [purchasable, setPurchasable] = useState({})

  // setPurchasable([PurchaseItems])

  return (
    <View style={styles.container}>
      {PurchaseItems.map((item, id) => (
        <StoreItem item={item} key={id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#6338F1',
    width: 300,
    borderRadius: 8,
  },
  itemImage: {
    width: 25,
    height: 25,
    borderRadius: 6,
  },
  info: {
    flexDirection: 'column',
    backgroundColor: '#6338F1',
  },
  itemDesc: {},
  itemText: {
    fontWeight: 'bold',
  },
  itemPrice: {},
})