import { View, ModifiedButton } from '../Themed'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'

type Props = {
  buttons: any,
  setRenderComp: any,
}

export default function ThreeCustomTabs({ buttons, setRenderComp }: Props) {
  const [activeButton, setActiveButton] = useState(buttons[0].name)

  const onButtonPress = (value: any) => {
    setActiveButton(value.name)
    setRenderComp(value.component)
  }

  return (
    <View style={styles.headerButtonsContainer}>
      <ModifiedButton 
        active={activeButton === buttons[0].name}
        text={buttons[0].name}
        onPress={() => onButtonPress(buttons[0])}
        buttonStyles={styles.headerButton}
      />
      <ModifiedButton 
        active={activeButton === buttons[1].name}
        text={buttons[1].name}
        onPress={() => onButtonPress(buttons[1])}
        buttonStyles={styles.headerButton}
      />
      <ModifiedButton 
        active={activeButton === buttons[2].name}
        text={buttons[2].name}
        onPress={() => onButtonPress(buttons[2])}
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