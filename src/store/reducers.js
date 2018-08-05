
export const item = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        id: action.id,
        text: action.text,
        status: action.status
      }
    default:
      return state
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        item({}, action)
      ]
    case "REMOVE_ITEM":
      return state.filter(
        i => i.id !== action.id
      )
    case "TOGGLE_ITEM":
     return state.map(i => (i.id === action.id) ? {...i, completed: !i.completed} : i)
    default:
      return state
  }
}

export const filterVisible = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filterName
      break;
    default:
      return state
  }
}
