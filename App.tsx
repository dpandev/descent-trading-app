import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure({
  ...awsconfig,
  // API: {
  //   graphql_headers: async () => {
  //   const session = await await Amplify.Auth.currentSession()
  //   return ({
  //       'Authorization': session.getIdToken().getJwtToken()
  //   })}
  // }
})

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
