import { v4 } from 'uuid'

export const addItem = (text) =>
  ({
    type: "ADD_ITEM",
    id: v4(),
    text,
    completed: false
  })

export const removeItem = (id) =>
  ({
    type: "REMOVE_ITEM",
    id
  })

export const toggleItem = (id) =>
  ({
    type: "TOGGLE_ITEM",
    id
  })

export const setFilter = (filterName) =>
  ({
    type: "SET_FILTER",
    filterName
  })
