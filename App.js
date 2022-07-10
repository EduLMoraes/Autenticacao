import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function Login({navigation}){
  return(
    <LoginScreen></LoginScreen>
  );
}

function Home({navigation}){
  return(
    <HomeScreen></HomeScreen>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigation>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen}></Stack.Screen>
        </Stack.Navigation>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
