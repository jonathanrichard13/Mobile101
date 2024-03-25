import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import TopBarComponent from './TopBarComponent';
import ProfileComponent from './ProfileComponent';
import CardComponent from './CardComponent';
import CategoryChipComponent from './CategoryChipComponent';
import MenuComponent from './MenuComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <TopBarComponent />
          <ProfileComponent name='Nabila Leksana Putri' />
          <CardComponent />
        </View>

        <CategoryChipComponent></CategoryChipComponent>

        <MenuComponent></MenuComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    padding: 20,
    backgroundColor: '#FFE0CD',
  }
});
