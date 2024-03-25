import { Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    
    <ImageBackground style={styles.container} resizeMode="cover" source={ require('../assets/Background.png') }>
        <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={styles.container} >
            <View style={[styles.subContainer, styles.topContainer]}>        
              <Image source={ require('../assets/bni_logo.png') } style={styles.image} />
              <Text style={styles.tagline}>Melayani Negeri Kebanggaan Bangsa</Text>
            </View>
            <View style={{ height:200 }}></View>
            <View style={styles.subContainer}>
              <Image source={ require('../assets/LPS.png') } style={styles.lpsImage} />
              <Text style={ styles.description }>PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS)</Text>
              <View style={ {height:44} }></View>
              <Text style={ styles.version }>v5.11.1</Text>
            </View>
        </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  topContainer: {
    gap: 16
  },

  lpsImage: {
    width: 66,
    height: 28,
  },

  tagline: {
    color: '#006599',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16.80,
  },

  description: {
    textAlign: 'center',
    color: 'rgba(58, 53, 65, 0.68)',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    marginHorizontal: 20
  },

  version: {
    color: 'rgba(58, 53, 65, 0.68)',
    fontSize: 10,
    fontWeight: '400',
  }

})
