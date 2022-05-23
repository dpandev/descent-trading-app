import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View, ScrollView } from '../../components/Themed';
import Rankings from '../Rankings';
import Home from '../Home';
import Store from '../Store';
import PageHeader from '../../components/PageHeader';

export default function TabOneScreen() {
  const [topButtons, setTopButtons] = useState(['Home', 'Rankings', 'Store'])
  const [activeButton, setActiveButton] = useState(topButtons[0])
  const [reComp, setReComp] = useState(<></>)
  const buttonOptions  = {
    buttons: [
      {
        name: 'Home',
        component: <Home />,
      },
      {
        name: 'Rankings',
        component: <Rankings />,
      },
      {
        name: 'Store',
        component: <Store />,
      }
    ],
    callback: setActiveButton,
  }

  const renderView = (value: string) => {
    if (value === buttonOptions.buttons[0].name) {
      return <Home />
    } else if (value === buttonOptions.buttons[1].name) {
      return <Rankings />
    } else if (value === buttonOptions.buttons[2].name) {
      return <Store />
    }
  }

  // const renderView = (value: string) => {
  //   if (value === topButtons[0]) {
  //     return <Home />
  //   } else if (value === topButtons[1]) {
  //     return <Rankings />
  //   } else if (value === topButtons[2]) {
  //     return <Store />
  //   }
  // }

  return (
    <View style={styles.page}>
      <PageHeader title={'Welcome'} buttonsOptions={buttonOptions} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={{ width: '100%' }}
      >
        {renderView(activeButton)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 15,
  },
  header: {},
  title: {},
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
