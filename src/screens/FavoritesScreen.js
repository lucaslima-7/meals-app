import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'
import themes from '../../themes/themes'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const FavoritesScreen = ({ navigation }) => {
  const { favoriteMeals } = useSelector(({ meals }) => meals)

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

  return (
    <View style={styles.screen}>
      {favoriteMeals && favoriteMeals.length > 0 ? (
        <FlatList
          style={{ width: '100%' }}
          data={favoriteMeals}
          renderItem={renderMealItem}
        />
      ) : (
        <Text style={{ fontFamily: 'muli' }}>You don't have any favorites 😢</Text>
      )}
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