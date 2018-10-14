import React, { Component } from 'react'
import styled from 'styled-components'

import Home from './Home'
import RestaurantList from './RestaurantList'

const Container = styled.div`
  padding: 24px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
        <RestaurantList />
      </Container>
    )
  }
}

export default App
