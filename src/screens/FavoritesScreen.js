import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import themes from '../../themes/themes'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const FavoritesScreen = ({ navigation }) => {
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

  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%' }}
        data={favMeals}
        renderItem={renderMealItem}
      />
    </View>
  )
}

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Favorites',
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

export default FavoritesScreen