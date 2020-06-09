import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import themes from '../../themes/themes'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
    </View>
  )
}

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Filters',
    headerStyle: {
      backgroundColor: themes.secondary,
    },
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName="bars" color="#FFF" onPress={() => {
        navigation.toggleDrawer()
      }} />
    </HeaderButtons>,
    headerTintColor: '#FFF'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20
  }
})

export default FiltersScreen