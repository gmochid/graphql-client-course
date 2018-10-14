import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const Home = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>An unexpected error occurred</div>
  }
  return (
    <div>
      <div>Home</div>
      <div>{data.home.user.name}</div>
      <div>{data.home.recommendation.name}</div>
      <br/>
      <br/>
    </div>
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
