import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TopBarComponent from '../components/TopBarComponent';
import ProfileComponent from '../components/ProfileComponent';
import CardComponent from '../components/CardComponent';
import CategoryChipComponent from '../components/CategoryChipComponent';
import MenuComponent from '../components/MenuComponent';
import PromoComponent from '../components/PromoComponent';

export default function TryAsync() {
  const SimulateGetAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
          resolve(
            {
              name: 'Nabila Leksana Putri',
              balance: '13.582.000',
              poin: '3100',
              accountNumber: '1812345678'

            }
          )
        } else {
          reject('Error karena tidak berhasil')
        }
      }, 3600)
      
  })}

  const handleAsync = async () => {
    try {
      const asyncResult = await SimulateGetAccount()
      console.log("Berhasil: ", asyncResult)
    } catch(exception) {
      console.error("Catch: ", exception)
    } finally {

    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handleAsync}>
          <Text style={{ fontSize : 30}}>Klik mee!</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
