import React from 'react';
import RecipeeList from './RecipeeList';

const Home = (props) => {
  return (
    <div>
      <RecipeeList recipees={props.recipees} />
    </div>
  )
}

export default Home;