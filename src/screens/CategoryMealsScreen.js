import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import themes from '../../themes/themes'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = ({ navigation }) => {
  const { filteredMeals, favoriteMeals } = useSelector(({ meals }) => meals)

  const renderMealItem = data => {
    const isFavorite = favoriteMeals.find(meal => meal.id === data.item.id)

    return (
      <MealItem
        title={data.item.title}
        duration={data.item.duration}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        image={data.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: data.item.id,
              mealTitle: data.item.title,
              isFav: isFavorite
            }
          })
        }}
      />
    )
  }

  const id = navigation.getParam('categoryId')
  const displayedMeals = filteredMeals.filter(meal => meal.categoryIds.indexOf(id) >= 0)

  return (
    <View style={styles.screen}>
      {displayedMeals.length === 0 ? (
        <Text style={{ fontFamily: 'muli' }}>No meals found, check your filters!</Text>
      ) : (
          <FlatList style={{ width: '100%' }} data={displayedMeals} renderItem={renderMealItem} />
        )}
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