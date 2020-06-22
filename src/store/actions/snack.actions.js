export const OPEN_SNACK = '[SNACK] OPEN_SNACK'
export const CLOSE_SNACK = '[SNACK] CLOSE_SNACK'

export const closeSnack = () => {
  return {
    type: CLOSE_SNACK,
    status: false
  }
}

export const openSnack = () => {
  return {
    type: OPEN_SNACK,
    status: true
  }
}