import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { AuthContext } from './src/components/auth';

import { Routes } from './src/routes';

export default function App(){

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
      />
      <AuthContext.Provider value={{
        name: 'Enzo',
        email: 'enzobonfxo@gmail.com',
        avatar: 'enzobonf.png'
      }}>
        <Routes />
      </AuthContext.Provider>
    </>
  );
}
