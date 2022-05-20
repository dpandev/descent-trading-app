import { View, Text } from '../Themed'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme';

type Props = {
  placeholder?: string,
}

export default function Searchbar({ placeholder }: Props) {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={25}
        color={Colors[colorScheme].text}
        style={{ marginLeft: 15 }}
      />
      <TextInput 
        placeholder={placeholder}
        style={styles.input} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#232228',
    paddingVertical: 10,
  },
  input: {
    marginLeft: 25,
    fontSize: 18,
  },
})