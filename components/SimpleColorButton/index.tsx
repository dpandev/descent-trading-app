import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface SimpleColorButtonProps {
  disabled?: boolean,
  onPress: any,
  text: string,
  bgColor?: string,
  fgColor?: string,
  activePress?: boolean,
  onActivePress?: Function,
}

export default function SimpleColorButton({ disabled, onPress, text, activePress, onActivePress }: SimpleColorButtonProps) {
  return (
    <Pressable 
      disabled={disabled}
      onPress={onPress} 
      onPressIn={() => onActivePress?.(true)}
      onPressOut={() => onActivePress?.(false)}
      style={styles.container}>
      <Text 
        style={[styles.text, activePress ? {color: "#fff"} : {}]}>
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
    backgroundColor: 'black',
  },
  text: {
    color: '#6338F1',
    fontWeight: 'bold',
    letterSpacing: 0.35,
    fontSize: 18,
    textAlign: 'center',
  },
})
