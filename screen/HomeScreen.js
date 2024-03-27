import { SafeAreaView, StyleSheet, View, } from 'react-native';
import TopBarComponent from '../components/TopBarComponent';
import ProfileComponent from '../components/ProfileComponent';
import CardComponent from '../components/CardComponent';
import CategoryChipComponent from '../components/CategoryChipComponent';
import MenuComponent from '../components/MenuComponent';
import PromoComponent from '../components/PromoComponent';
import { useEffect, useState } from 'react';
import { SimulateGetAccount } from '../utils/simulateGetAccount';

export default function HomeScreen() {
  const [account, setAccount] = useState()

  const handleAsync = async () => {
    try {
      const asyncResult = await SimulateGetAccount()
      console.log("Berhasil: ", asyncResult)
      setAccount(asyncResult)
    } catch(exception) {
      console.error("Catch: ", exception)
    } finally {

    }
  }
  
  useEffect(() => {
    handleAsync()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <TopBarComponent />
          <ProfileComponent name= {account ? account.name : 'Default User'} />
          <CardComponent nominal='13.582.000' accountNumber='1812345678' pointsCount='3.100'/>
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
