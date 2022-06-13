import { Pressable } from 'react-native'
import React, { Component } from 'react'

export interface Props {
  onPress?: Function,
  buttonStyles?: Object,
  active?: boolean,
  activePress?: boolean,
  onPressChange?: Function,
}

class ListItemButton extends Component<Props>{

  render() {
    return (
      <Pressable 
        onPress={() => this.props.onPress?.()} 
        style={this.props.buttonStyles}
        onPressIn={() => this.props.onPressChange?.(true)}
        onPressOut={() => this.props.onPressChange?.(false)}
      >
        {this.props.children}
      </Pressable>
    )
  }
}

export default ListItemButton