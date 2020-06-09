import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import themes from '../../themes/themes'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back" onPress={() => {
        navigation.popToTop()
      }} />
    </View>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return {
    title: selectedMeal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Favorite" iconName="heart" onPress={() => { }} />
    </HeaderButtons>,
    headerStyle: {
      backgroundColor: themes.primary,
    },
    headerTintColor: '#000'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen