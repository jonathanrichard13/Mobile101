import { auth, signInWithEmailAndPassword } from '../firebaseConfig';
import { Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList, Dimensions } from 'react-native';

export default function LoginScreen({navigation}) {

    const data = [
        {
          id: 1,
          image:  require('../assets/transfer.png'),
          name: "Transfer"
        },
        {
          id: 2,
          image: require('../assets/ewallet.png'),
          name: "E-Wallet"
        },
        {
          id: 3,
          image: require('../assets/pembayaran.png'),
          name: "Pembayaran"
        }
    ]

    numColumns = 3
    const itemWidth = Dimensions.get('window').width / numColumns;


    const renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: "column",
                alignItems: "center",
                width: '33%',
                marginTop: 18,
              }}>
                <Image source={item.image} style={{width: 54, height: 54,}} />
                <Text style={{
                    color: 'rgba(58, 53, 65, 0.68)',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 16.80,
                }}>{item.name}</Text>
            </View>
        );
    };

    email = "email@email.com"
    password = "password@password.com"
    const signIn = () => {
        console.log("Sigin in")
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage)
        })
    }

  return (
    <ImageBackground style={styles.container} resizeMode="cover" source={ require('../assets/Background.png') }>
        <View style={[styles.subContainer, styles.topContainer]}>        
            <Image source={ require('../assets/bni_logo.png') } style={styles.image} />
            <Text style={styles.tagline}>Melayani Negeri Kebanggaan Bangsa</Text>
        </View>

        <View style={{ width: '80%', height:'30%' }}>
            <TouchableOpacity 
                onPress={ () => { signIn() } }
                style={{
                    flexDirection: 'row', 
                    backgroundColor: '#FF6600',
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: 12
                }}>
                <Text style={{fontSize: 12, color: 'white', fontWeight: 400}}>Login</Text>
                <Image source={require('../assets/login-icon.png')} style={{width: 13.5, height: 13.5}} />
            </TouchableOpacity>

            <View style={{
                    width: "100%"
                }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
        <View style={styles.subContainer}>
            <TouchableOpacity> 
                <View style={ styles.helpContainer }>
                        <Image source={require("../assets/help.png")}></Image>
                    <Text style={{color: '#FF6600', fontSize: 11}}>Bantuan</Text>
                </View>
            </TouchableOpacity>
            <Text style={ styles.version }>v5.11.1</Text>
        </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 36
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
  },

  helpContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    backgroundColor: '#FFE0CD',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: "center",
  }

})