import React from 'react'
import { Text } from './Themed'
import { StyleSheet } from 'react-native'

interface Props {
  value: any,
  style?: object,
}

const styles = StyleSheet.create({
  green: {
    color: '#3EF03E',
  },
  red: {
    color: '#FE4A76',
  },
})

const shortenDate = (value: string) => {
  const dateValue = new Date(value)
  return dateValue.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

const abbreviateNumber = (num: any, fixed: any) => {
  if (num === null) { return null }
  if (num === 0) { return '0' }
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = Math.abs(c),
      e = d + ['', 'K', 'M', 'B', 'T'][k] // append power
  return e
}

export function AbbreviateNum({ value, style = {} }: Props) {
  return (
    <Text style={[style, styles.green]}>
      {abbreviateNumber(value, 0)}
    </Text>
  )
}

export function Networth({ value, style = {} }: Props ) {
  return (
    <Text style={[style, value > 0 ? styles.green : styles.red]}>
      {value > 0 ? '$' : '-$'}
      {abbreviateNumber(value, 0)}
    </Text>
  )
}

export function PercentageChange({ value, style = {} }: Props ) {
  return (
    <Text style={[style, value > 0 ? styles.green : styles.red, {fontWeight: 'bold'}]}>
      {value > 0 && '+'}{value}%
    </Text>
  )
}

export function PreciseMoney({ value, style = {} }: Props ) {
  return (
    <Text style={[style]}>
      {value > 0 ? '$' : '-$'}
      {value.toLocaleString('en-US')}
    </Text>
  )
}

export function ShortDate({ value, style = {} }: Props) {
  return (
    <Text style={[styles.green, style]}>
      {shortenDate(value)}
    </Text>
  )
}