import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, View, ScrollView } from '../../components/Themed';
import Rankings from '../Rankings';
import Home from '../Home';
import Store from '../Store';
import PageHeader from '../../components/PageHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TabOneScreen() {

  const Stack = createNativeStackNavigator()

  const [reComp, setReComp] = useState(<Home />)
  const buttonOptions = {
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
    setRenderComp: setReComp,
  }

  return (
    <View style={styles.page}>
      <PageHeader title={'Welcome'} buttonsOptions={buttonOptions} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={{ width: '100%' }}
      >
        {reComp}
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
