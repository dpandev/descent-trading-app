/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { Ionicons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import SettingsScreen from '../screens/SettingsScreen';
 import TabOneScreen from '../screens/tabs/TabOneScreen';
 import TabTwoScreen from '../screens/tabs/TabTwoScreen';
 import TabThreeScreen from '../screens/tabs/TabThreeScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 import TabFourScreen from '../screens/tabs/TabFourScreen';
import Store from '../screens/Store';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   const colorScheme = useColorScheme();
   
   return (
     <Stack.Navigator screenOptions={{ 
       headerStyle: {backgroundColor: Colors[colorScheme].primary }, 
       headerTitleAlign: 'center', 
     }}>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen 
           name="Modal" 
           component={ModalScreen}  
           options={{ headerShown: false }}
         />
       </Stack.Group>
       <Stack.Screen 
         name='Settings' 
         component={SettingsScreen} 
         options={{ title: 'Settings', animation: 'slide_from_right' }} 
       />
       <Stack.Screen 
         name='Store' 
         component={Store} 
         options={{ headerShown: false, title: 'Store' }} 
       />
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
         tabBarStyle: { 
           backgroundColor: Colors[colorScheme].primary, 
           height: 80,
         },
         tabBarShowLabel: false,
         headerStyle: { backgroundColor: Colors[colorScheme].primary, },
         headerTitleAlign: 'center',
         headerShown: false,
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'Tab One',
           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Tab Two',
           tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="TabThree"
         component={TabThreeScreen}
         options={{
           title: 'Tab Three',
           tabBarIcon: ({ color }) => <TabBarIcon name="stats-chart" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="TabFour"
         component={TabFourScreen}
         options={({navigation}: RootTabScreenProps<'TabFour'>) => ({
           title: 'Social',
           tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
           headerLeft: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
               <Ionicons
                 name="information-circle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginLeft: 15 }}
               />
             </Pressable>
           ),
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Settings')}>
               <Ionicons
                 name="settings-sharp"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
           headerShown: true,
         })}
       />
     </BottomTab.Navigator>
   );
 }
 
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof Ionicons>['name'];
   color: string;
 }) {
   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
 }