import React from 'react'
import { connect } from 'react-redux'
import { removeItem, toggleItem } from '../actions'

import Item from './Item'

const getVisibleItems = (items, filterName) => {
  switch (filterName) {
    case "SHOW_ALL":
      return items;
    case "SHOW_DO":
      return items.filter(i => !i.completed)
    case "SHOW_DONE":
      return items.filter(i => i.completed)
    default:
      console.log("Ошибка")
      return items
  }
}

const ListItem = ({items, onRemoveItem = f => f, onToggleItem = f => f}) => {
  return (
    <ul>
      {items.map(item =>
        <Item
          completed={item.completed}
          text={item.text}
          id={item.id}
          onRemoveItem={onRemoveItem}
          onToggleItem={onToggleItem}
        />
      )}
    </ul>
  )
}

export default connect(
  state => ({
    items: getVisibleItems(state.items, state.filterVisible)
  }),
  dispatch => ({
    onRemoveItem(id) {
      dispatch(removeItem(id))
    },
    onToggleItem(id) {
      dispatch(toggleItem(id))
    }
  })
)(ListItem)
