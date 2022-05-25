import { Text, Pressable } from 'react-native'
import React, { Component } from 'react'

type Props = {
  onPress?: Function,
  text?: string,
  textStyles?: Object,
  buttonStyles?: Object,
  active?: boolean,
  activePress?: boolean,
  onPressChange?: Function,
}

class CustomButton extends Component<Props>{

  render() {
    return (
      <Pressable 
        onPress={() => this.props.onPress?.()} 
        style={this.props.buttonStyles}
        onPressIn={() => this.props.onPressChange?.(true)}
        onPressOut={() => this.props.onPressChange?.(false)}
      >
        <Text style={this.props.textStyles}>{this.props.text}</Text>
      </Pressable>
    )
  }
}

export default CustomButton