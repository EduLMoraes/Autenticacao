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

function EscreverScreen({ navigation }) {
  return (
    <Escrever></Escrever>
  );
}


function ListarScreen({ navigation }) {
  return (
    <Listar></Listar>
  );
}


function ListaComFiltroScreen({ navigation }) {
  return (
    <ListarComFiltro></ListarComFiltro>
  );
}

function ListaComFiltroGatosScreen({ navigation }) {
  return (
    <ListarComFiltroGatos></ListarComFiltroGatos>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Escrever" component={EscreverScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
        <Drawer.Screen name="Lista Com Filtro Gatos" component={ListaComFiltroGatosScreen} />
        <Drawer.Screen name="Lista Com Filtro" component={ListaComFiltroScreen} />
      </Drawer.Navigator>
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
