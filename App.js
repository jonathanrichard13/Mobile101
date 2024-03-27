import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import HomeScreen from './screen/HomeScreen';
import SplashScreen from "./screen/SplashScreen";
import TryAsync from './screen/TryAsync';
import { app, auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from './firebaseConfig';
import LoginScreen from './screen/LoginScreen';


const Stack = createStackNavigator();

export default function App () {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsUserLoggedIn(true)
      } else {
        setIsUserLoggedIn(false)
      }
    });
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isUserLoggedIn ? 
        (<>
          {/* <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} /> */}
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        </>) : (<>
          {/* <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} /> */}
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        </>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});
