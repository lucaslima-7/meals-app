import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import themes from '../../themes/themes'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = ({ navigation }) => {
  const renderMealItem = data => {
    return (
      <MealItem
        title={data.item.title}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        image={data.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({ routeName: 'MealDetail', params: { mealId: data.item.id } })
        }}
      />
    )
  }

  const id = navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList style={{ width: '100%' }} data={displayedMeals} renderItem={renderMealItem} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(i => i.id === id)

  return {
    title: selectedCategory.title,
    headerStyle: {
      backgroundColor: themes.secondary,
    },
    headerTintColor: '#FFF'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 24
  }
})

export default CategoryMealsScreen