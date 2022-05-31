import { Text, Pressable } from 'react-native'
import React, { Component } from 'react'
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  onPress?: Function,
  text: string,
  textStyles?: Object,
  buttonStyles?: Object,
  active?: boolean,
  activePress?: boolean,
  onPressChange?: Function,
  icon?: any,
  iconSize?: number,
  iconColor?: any,
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
        {this.props.icon &&
          <FontAwesome 
            name={this.props.icon} 
            size={this.props.iconSize} 
            color={this.props.iconColor}
          />
        }
      </Pressable>
    )
  }
}

export default CustomButton