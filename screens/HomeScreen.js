import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { auth,firestore } from '../firebase'
import Escrever from './Escrever'
import Listar from './Listar'
import ListarComFiltro from './ListarComFiltro'
import LoginScreen from './LoginScreen';

const HomeScreen = () => {
  const navigation = useNavigation()

  const drawer = createDrawerNavigator()

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
  

  return (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Login} />
    <Drawer.Screen name="Escrever" component={EscreverScreen} />
    <Drawer.Screen name="Listar" component={ListarScreen} />
    <Drawer.Screen name="Lista Com Filtro" component={ListaComFiltroScreen} />
  </Drawer.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
