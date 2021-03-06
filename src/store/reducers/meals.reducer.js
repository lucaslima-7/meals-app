import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals.actions'

const initialState = {
  initialMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const meals = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(existingIndex, 1)
        return {
          ...state,
          favoriteMeals: updatedFavMeals
        }
      } else {
        const meal = state.initialMeals.find(meal => meal.id === action.mealId)
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        }
      }

    case SET_FILTERS:
      const appliedFilters = action.filters
      const filteredMeals = state.initialMeals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false
        }

        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false
        }

        return true
      })
      return {
        ...state,
        filteredMeals
      }
    default:
      return state
  }
}

export default meals