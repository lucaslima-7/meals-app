import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native'
import themes from '../../themes/themes'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { toggleFavorite } from '../store/actions/meals.actions'
import { openSnack } from '../store/actions/snack.actions'

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{children}</Text>
    </View>
  )
}

const MealDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { initialMeals, favoriteMeals } = useSelector(({ meals }) => meals)
  const mealId = navigation.getParam('mealId')
  const selectedMeal = initialMeals.find(meal => meal.id === mealId)

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
    dispatch(openSnack())
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    const result = favoriteMeals.some(meal => meal.id === mealId)
    navigation.setParams({ isFav: result })
  }, [favoriteMeals])


  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.bold}>{selectedMeal.duration} min</Text>
        <Text style={styles.bold}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.bold}>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>- {ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      <View style={{ marginBottom: 20 }}>
        {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
      </View>
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam('mealTitle')
  const toggleFavorite = navigation.getParam('toggleFav')
  const isFav = navigation.getParam('isFav')

  return {
    title: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Favorite" iconName={isFav ? "heart" : "heart-o"} color="#FFF" onPress={toggleFavorite} />
    </HeaderButtons>,
    headerStyle: {
      backgroundColor: themes.primary,
    },
    headerTintColor: '#FFF'
  }
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 12,
    justifyContent: 'space-around',
    backgroundColor: themes.primary
  },
  header: {
    height: '80%',
  },
  bold: {
    fontFamily: 'muli-bold',
    color: "#FFF"
  },
  image: {
    width: '100%',
    height: 250
  },
  title: {
    fontFamily: 'muli-bold-italic',
    fontSize: 22,
    textAlign: 'left',
    marginLeft: 20,
    marginVertical: 16,
    color: themes.primary
  },
  listItem: {
    marginVertical: 12,
    marginLeft: 32,
    marginRight: 20
  },
  listItemText: {
    fontFamily: 'muli',
    fontSize: 14,
    textAlign: 'left'
  }
})

export default MealDetailScreen