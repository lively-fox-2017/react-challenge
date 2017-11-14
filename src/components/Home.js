import React from 'react';
import RecipeeList from './RecipeeList';

const Home = (props) => {
  return (
    <div>
      {props.isLoading && <h1>Loading ...</h1>}
      {!props.isLoading && <RecipeeList recipees={props.recipees} />}
    </div>
  )
}

export default Home;