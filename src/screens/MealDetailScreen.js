import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data'
import themes from '../../themes/themes'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{children}</Text>
    </View>
  )
}

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

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
  const mealId = navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return {
    title: selectedMeal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Favorite" iconName="heart" color="#FFF" onPress={() => { }} />
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