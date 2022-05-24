import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import Searchbar from '../Searchbar'
import ThreeCustomTabs from '../ThreeCustomTabs'

type Props = {
  title: string;
  searchbarOptions?: any;
  buttonsOptions?: any;
}

export default function PageHeader({ title, searchbarOptions, buttonsOptions }: Props) {
  return (
    <View style={styles.header}>
      {searchbarOptions
        ? <View style={styles.search}>
            <Searchbar placeholder={searchbarOptions.placeholder} />
          </View>
        : null
      }
      <Text style={styles.title}>{title}</Text>
      {buttonsOptions
        ? <ThreeCustomTabs buttons={buttonsOptions.buttons} setRenderComp={buttonsOptions.setRenderComp} />
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '90%',
    marginTop: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  search: {
    width: '100%',
    alignSelf: 'center',
  },
})