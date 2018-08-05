import React from 'react'
import { connect } from 'react-redux'

import '../../style/main.css'

import AddTextForm from './AddTextForm'
import ListItem from './ListItem'
import FilterGroup from './FilterGroup'

const App = () =>
  <div className="main">
    <div className="app">
      <AddTextForm />
      <ListItem />
      <FilterGroup />
    </div>
  </div>

export default App
