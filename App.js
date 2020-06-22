import React from 'react';
import { View } from 'react-native'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo'
import MealsNavigator from './src/navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import meals from './src/store/reducers/meals.reducer'
import snack from './src/store/reducers/snack.reducer'
import CustomSnackbar from './src/components/CustomSnackbar';

enableScreens()

const rootReducer = combineReducers({
  meals,
  snack
})
const store = createStore(rootReducer)

export default function App() {
  let [fontsLoaded] = useFonts({
    'muli': require('./assets/fonts/Muli-Regular.ttf'),
    'muli-bold': require('./assets/fonts/Muli-Bold.ttf'),
    'muli-bold-italic': require('./assets/fonts/Muli-BoldItalic.ttf'),
    'muli-light': require('./assets/fonts/Muli-Light.ttf'),
    'muli-medium': require('./assets/fonts/Muli-Medium.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <>
          <CustomSnackbar message={"Teste"} type="success" />
        </>
        <MealsNavigator />
      </Provider>
    )
  }
}