import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { FontAwesome5 } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import themes from '../../themes/themes'


const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: {
    screen: MealDetailScreen
  }
}, {
  defaultNavigationOptions: {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitleStyle: {
      fontFamily: 'muli'
    },
    headerBackTitleStyle: {
      fontFamily: 'muli'
    }
  },
  mode: 'card'
})

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitleStyle: {
      fontFamily: 'muli'
    },
    headerBackTitleStyle: {
      fontFamily: 'muli'
    }
  },
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'muli' }}>Meals</Text> : 'Meals',
      tabBarIcon: (tabInfo) => {
        return <FontAwesome5 name="utensils" size={20} color={tabInfo.tintColor} />
      }
    }
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'muli' }}>Favorites!</Text> : 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <FontAwesome5 name="heart" size={20} color={tabInfo.tintColor} />
      }
    }
  }
}

const MealsTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: '#FFFFFF',
      barStyle: {
        backgroundColor: themes.secondary,
      },
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'muli'
        },
        activeTintColor: themes.secondary
      }
    })

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  defaultNavigationOptions: {
    drawerLabel: 'Filters',
    headerTitleStyle: {
      fontFamily: 'muli'
    },
    headerBackTitleStyle: {
      fontFamily: 'muli'
    }
  }
})

const MainNavigator = createDrawerNavigator({
  Favorites: MealsTabNavigator,
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: themes.secondary,
    labelStyle: {
      fontFamily: 'muli-bold'
    }
  }
})

export default createAppContainer(MainNavigator)