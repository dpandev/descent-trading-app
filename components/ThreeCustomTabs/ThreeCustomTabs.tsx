import { View, ModifiedButton } from '../Themed'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'

type Props = {
  onBtnChange: Function,
  // buttonText: Array<string>,
  buttonText: any,
}

export default function ThreeCustomTabs({ onBtnChange, buttonText,  }: Props) {
  const [activeButton, setActiveButton] = useState(buttonText[0].name)
  console.log(buttonText[0]);

  const onButtonPress = (value: string) => {
    setActiveButton(value)
    onBtnChange(value)
  }

  // const sendBackToParent = (value: string) => {
  //   if (value === buttonOptions.buttons[0].name) {
  //     return <Home />
  //   } else if (value === buttonOptions.buttons[1].name) {
  //     return <Rankings />
  //   } else if (value === buttonOptions.buttons[2].name) {
  //     return <Store />
  //   }
  // }

  return (
    <View style={styles.headerButtonsContainer}>
      <ModifiedButton 
        active={activeButton === buttonText[0].name}
        text={buttonText[0].name}
        onPress={() => onButtonPress(buttonText[0].name)}
        buttonStyles={styles.headerButton}
      />
      <ModifiedButton 
        active={activeButton === buttonText[1].name}
        text={buttonText[1].name}
        onPress={() => onButtonPress(buttonText[1].name)}
        buttonStyles={styles.headerButton}
      />
      <ModifiedButton 
        active={activeButton === buttonText[2].name}
        text={buttonText[2].name}
        onPress={() => onButtonPress(buttonText[2].name)}
        buttonStyles={styles.headerButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: '#1A1C2A',
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
  },
  headerButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 12,
    borderWidth: 0,
  },
})