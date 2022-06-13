import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabScreenProps, RootTabParamList } from "../types";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import TabOneScreen from '../screens/tabs/TabOneScreen';
import TabTwoScreen from '../screens/tabs/TabTwoScreen';
import TabThreeScreen from '../screens/tabs/TabThreeScreen';
import TabFourScreen from '../screens/tabs/TabFourScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
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
        options={{
          title: 'Tab Three',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}