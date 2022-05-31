import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface SimpleColorButtonProps {
  disabled?: boolean,
  onPress: any,
  text: string,
  type?: string,
  bgColor?: string,
  fgColor?: string,
}

export default function SimpleColorButton({ disabled, onPress, text, type='PRIMARY', bgColor, fgColor }: SimpleColorButtonProps) {
  return (
    <Pressable 
      disabled={disabled}
      onPress={onPress} 
      style={[
        styles.container, 
        // @ts-ignore
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text 
        style={[
          styles.text, 
          // @ts-ignore
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
          {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '75%',
    maxWidth: 400,
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: 'black',
  },
  container_SECONDARY: {
    borderColor: 'black',
    borderWidth: 2,
  },
  container_TERTIARY: {},
  container_QUADRARY: {},
  text: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.35,
    fontSize: 18,
    textAlign: 'center',
  },
  text_SECONDARY: {
    color: 'black',
  },
  text_TERTIARY: {
    color: 'grey',
    fontSize: 17,
  },
  text_QUADRARY: {
    color: 'tomato',
  },
})
