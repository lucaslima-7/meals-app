export const TOGGLE_FAVORITE = '[MEALS] TOGGLE_FAVORITE'
export const SET_FILTERS = '[MEALS] SET_FILTERS'

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id
  }
}

export const setFilters = settings => {
  return {
    type: SET_FILTERS,
    filters: settings
  }
}