import { ElementView, Text } from '../Themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import Searchbar from '../Searchbar'
import ThreeCustomTabs from '../ThreeCustomTabs'

export interface PageHeaderProps {
  title: string;
  searchbarOptions?: any;
  buttonsOptions?: any;
}

export default function PageHeader({ title, searchbarOptions, buttonsOptions }: PageHeaderProps) {
  return (
    <ElementView style={styles.header}>
      {searchbarOptions
        ? <ElementView style={styles.search}>
            <Searchbar placeholder={searchbarOptions.placeholder} />
          </ElementView>
        : null
      }
      <Text style={styles.title}>{title}</Text>
      {buttonsOptions
        ? <ThreeCustomTabs buttons={buttonsOptions.buttons} setRenderComp={buttonsOptions.setRenderComp} />
        : null
      }
    </ElementView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 10,
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