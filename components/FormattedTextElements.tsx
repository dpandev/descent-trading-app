import React from 'react'
import { Text } from './Themed'
import { StyleSheet } from 'react-native'

interface Props {
  value: any,
  isMoney?: boolean,
  isColored?: boolean,
  fixed?: number,
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

const getNumberOfZerosInDecimal = (num: any) => {
  if (num > 0.0 && num < 1.0) {
    return 1
  }
  let c = 0
  while (!~~num) {
    c++
    num *= 10
  }
  return c - 1
}

const abbreviateDecimal = (num: any, fixed?: number) => {
  const x = fixed || getNumberOfZerosInDecimal(num) + 7
  return parseFloat(num.toFixed(x))
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
      {value >= 0 ? '$' : '-$'}
      {abbreviateNumber(value, 0)}
    </Text>
  )
}

export function PercentageChange({ value, style = {} }: Props ) {
  return (
    <Text style={[style, value > 0 ? styles.green : styles.red, {fontWeight: 'bold'}]}>
      {value >= 0 && '+'}{value.toFixed(3)}%
    </Text>
  )
}

export function PreciseMoney({ value, style = {}, isColored }: Props ) {
  const redGreenExp = value >= 0 ? styles.green : styles.red
  return (
    <Text style={[isColored ? redGreenExp : {}, style]}>
      {value >= 0 ? '$' : '-$'}
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

export function TruncatedDecimal({ value, style = {}, isMoney, isColored, fixed }: Props) {
  const newValue = abbreviateDecimal(value, fixed)
  const moneyExp = newValue >= 0 ? '$' : '-$'
  const redGreenExp = newValue >= 0 ? styles.green : styles.red
  return (
    <Text style={[isColored ? redGreenExp : {}, style]}>
      {isMoney ? moneyExp : ''}
      {newValue.toLocaleString('en-US')}
    </Text>
  )
}