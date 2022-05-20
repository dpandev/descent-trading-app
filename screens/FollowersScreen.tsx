import { StyleSheet, Image } from 'react-native';
import Searchbar from '../components/Searchbar';
import { Text, View } from '../components/Themed';
import UsersList from '../components/UsersList';

export default function FollowersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder='search for a user'/>
      </View>
      <UsersList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: '90%',
  },
})
