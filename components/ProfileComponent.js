import { Image, StyleSheet, Text, View } from "react-native";

const ProfileComponent = ({name}) => {
  return (
    <View style={ styles.container }>
        <Image source={require("../assets/avatar.png")} />
        <View>
            <Text style={ styles.welcomeText }>Selamat Datang</Text>
            <Text style={ styles.nameText }>{name}</Text>
        </View>
    </View>

    
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        gap: 10

    },

    avatarImage: {
        width: 40,
        height: 40,
    },

    welcomeText: {
        color: "rgba(58, 53, 65, 0.68)",
        fontSize: 14
    },

    nameText: {
        color: "rgba(58, 53, 65, 0.87)",
        fontSize: 14
    }
});

export default ProfileComponent;
