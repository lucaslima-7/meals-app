import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { setFilters } from '../store/actions/meals.actions'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Filter from '../components/Filter'
import themes from '../../themes/themes'

const FiltersScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [gluten, setGluten] = useState(false)
  const [lactose, setLactose] = useState(false)
  const [vegan, setVegan] = useState(false)
  const [vegetarian, setVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: gluten,
      lactoseFree: lactose,
      vegan,
      isVegetarian: vegetarian
    }

    dispatch(setFilters(appliedFilters))
  }, [gluten, lactose, vegan, vegetarian, dispatch])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filter label={'Gluten-Free'} value={gluten} changeValue={setGluten} />
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