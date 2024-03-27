import { Image, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { auth,signOut } from '../firebaseConfig';


const TopBarComponent = () => {
  const signOutUser = () => {
    console.log('SignOut Called')
    signOut(auth).then(() => {
      console.log("Sign out successful")
    }).catch((error) => {
      console.error(error)
    })
  }


  return (
    <View style={ styles.container }>
      <Image source={require("../assets/bni_logo.png")} />
      
      <View style={ styles.rightContainer }>
        <TouchableOpacity>
          <Image source={require("../assets/notification_with_badge.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity> 
          <View style={ styles.helpContainer }>
                <Image source={require("../assets/help.png")}></Image>
              <Text>Bantuan</Text>
          </View>
        </TouchableOpacity>

        <Button title="Sign Out" color="#dc2626" onPress={() => {signOutUser()}} />
          
      </View>

    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rightContainer: {
    display: 'flex',
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  helpContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    padding: 5,
    borderRadius: 8,
    alignItems: "center"
  }
});

export default TopBarComponent;
