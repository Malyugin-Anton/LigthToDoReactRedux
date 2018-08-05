import { createStore, combineReducers } from 'redux'
import { item, items, filterVisible } from './reducers'
import stateData from '../../data/items'

const store = createStore(
  combineReducers({items, filterVisible}),
  stateData
)

store.subscribe(
  () => console.log(store.getState())
)

export default store
