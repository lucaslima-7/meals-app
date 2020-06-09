import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo'
import MealsNavigator from './src/navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'

enableScreens()

export default function App() {
  let [fontsLoaded] = useFonts({
    'muli': require('./assets/fonts/Muli-Regular.ttf'),
    'muli-bold': require('./assets/fonts/Muli-Bold.ttf'),
    'muli-light': require('./assets/fonts/Muli-Light.ttf'),
    'muli-medium': require('./assets/fonts/Muli-Medium.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <MealsNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
