import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import RestaurantList from './RestaurantList'

export const Container = styled.div`
  padding: 24px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/restaurant" component={RestaurantList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
