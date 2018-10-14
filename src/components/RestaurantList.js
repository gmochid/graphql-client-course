import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { Container } from './App'

const Restaurant = styled.div`
  padding: 8px 0;
`
const Name = styled.div`
  font-weight: 700;
`
const Address = styled.div`
  font-weight: 400;
`

const RestaurantList = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>An unexpected error occurred</div>
  }
  return (
    <Container>
      <div>Restaurant List</div>
      {data.restaurants.map((restaurant, index) => (
        <Restaurant key={index}>
          <Name>{restaurant.name}</Name>
          <Address>{restaurant.name}</Address>
        </Restaurant>
      ))}
    </Container>
  )
}

const RESTAURANT_QUERY = gql`{
  restaurants {
    name
    address
  }
}`

export default () => (
  <Query query={RESTAURANT_QUERY}>
    {(props) => <RestaurantList {...props} />}
  </Query>
)
