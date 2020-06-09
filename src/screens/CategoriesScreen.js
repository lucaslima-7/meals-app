import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import themes from '../../themes/themes'
import CategoryCard from '../components/CategoryCard'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = data => {
    return (
      <CategoryCard title={data.item.title} color={data.item.color} onSelect={() => {
        navigation.navigate({
          routeName: 'CategoryMeals', params: {
            categoryId: data.item.id
          }
        })
      }} />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      style={styles.screen}
    />
  )
}

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Meal Categories',
    headerStyle: {
      backgroundColor: themes.secondary,
    },
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName="bars" color="#FFF" onPress={() => {
        navigation.toggleDrawer()
      }} />
    </HeaderButtons>,
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontFamily: 'muli'
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20
  }
})

export default CategoriesScreen