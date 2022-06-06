/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import React from 'react'
import RootNavigator from './RootNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <AuthenticatedUserProvider>
      <NavigationContainer
        linking={LinkingConfiguration}
        // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        theme={DarkTheme}>
        <RootNavigator />
      </NavigationContainer>
    </AuthenticatedUserProvider>
  );
}
