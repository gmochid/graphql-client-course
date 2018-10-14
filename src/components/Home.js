import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import { Container } from './App'

const Home = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>An unexpected error occurred</div>
  }
  return (
    <Container>
      <div>Home</div>
      <div>User: {data.home.user.name}</div>
      <div>Recommendation: {data.home.recommendation.name}</div>
      <br/>
      <br/>
      <Link to='/restaurant'>Restaurant List</Link>
    </Container>
  )
}

const HOME_QUERY = gql`{
  home {
    user {
      name
    }
    recommendation {
      name
    }
  }
}`

export default () => (
  <Query query={HOME_QUERY}>
    {(props) => <Home {...props} />}
  </Query>
)
