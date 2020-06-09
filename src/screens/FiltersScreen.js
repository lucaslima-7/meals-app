import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Filter from '../components/Filter'
import themes from '../../themes/themes'

const FiltersScreen = ({ navigation }) => {
  const [glutten, setGlutten] = useState(false)
  const [lactose, setLactose] = useState(false)
  const [vegan, setVegan] = useState(false)
  const [vegetarian, setVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttenFree: glutten,
      lactoseFree: lactose,
      vegan,
      isVegetarian: vegetarian
    }
  }, [glutten, lactose, vegan, vegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filter label={'Gluten-Free'} value={glutten} changeValue={setGlutten} />
      <Filter label={'Lactose-Free'} value={lactose} changeValue={setLactose} />
      <Filter label={'Vegan'} value={vegan} changeValue={setVegan} />
      <Filter label={'Vegetarian'} value={vegetarian} changeValue={setVegetarian} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20
  },
  title: {
    fontFamily: 'muli-bold',
    fontSize: 20,
    marginHorizontal: 12,
    marginTop: 20,
    textAlign: 'center'
  }
})

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
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Save" iconName="save" color="#FFF" onPress={navigation.getParam('save')} />
    </HeaderButtons>,
    headerTintColor: '#FFF'
  }
}

export default FiltersScreen