import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import TopBarComponent from './TopBarComponent';
import ProfileComponent from './ProfileComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <TopBarComponent />
        <ProfileComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1A1AA',
    alignItems: 'center',
    padding: 20
  },
});
