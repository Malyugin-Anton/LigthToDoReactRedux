import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const FilterGroup = ({filterName, onFilter = f => f}) => {
  return (
    <ul className="filter-group">
      <li className={
            (filterName === "SHOW_ALL") ? 'active' : null
          }
          onClick={() => onFilter("SHOW_ALL")}
      >
        Все
      </li>
      <li className={
            (filterName === "SHOW_DO") ? 'active' : null}
            onClick={() => onFilter("SHOW_DO")}
      >
        Активные
      </li>
      <li className={
            (filterName === "SHOW_DONE") ? 'active' : null}
            onClick={() => onFilter("SHOW_DONE")}
      >
        Готовые
      </li>
    </ul>
  )
}

export default connect(
  state => ({
    filterName: state.filterVisible
  }),
  dispatch => ({
    onFilter(filterName) {
      dispatch(setFilter(filterName))
    }
  })
)(FilterGroup)
