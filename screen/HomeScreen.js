import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import TopBarComponent from '../components/TopBarComponent';
import ProfileComponent from '../components/ProfileComponent';
import CardComponent from '../components/CardComponent';
import CategoryChipComponent from '../components/CategoryChipComponent';
import MenuComponent from '../components/MenuComponent';
import PromoComponent from '../components/PromoComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <TopBarComponent />
          <ProfileComponent name='Nabila Leksana Putri' />
          <CardComponent nominal='13.582.000' />
        </View>

        <CategoryChipComponent></CategoryChipComponent>
        <MenuComponent></MenuComponent>
        <PromoComponent></PromoComponent>
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
  },

});
