import { Text, Pressable } from 'react-native'
import React from 'react'

type Props = {
  onPress: Function,
  text: string,
  textStyles: Object,
  buttonStyles: Object,
  active: boolean,
}

class CustomButton extends React.Component<Props>{

  render() {
    return (
      <Pressable 
        onPress={() => this.props.onPress()} 
        style={this.props.buttonStyles}
      >
        <Text style={this.props.textStyles}>{this.props.text}</Text>
      </Pressable>
    )
  }
}


export default CustomButton