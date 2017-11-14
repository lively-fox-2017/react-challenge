import React from 'react';
import { Link } from 'react-router-dom'

const RecipeeList = (props) => {
  const recipees = props.recipees.map(recipee => (
      <Link to={'/recipee/' + recipee.id} className="recipee-item" key={recipee.id}>
        <img src={recipee.thumbnail} alt={recipee.title}></img>
        <h2>{recipee.title}</h2>
      </Link>
    )
  );

  return <div className="recipee-list-wrapper">{recipees}</div>;
}

export default RecipeeList;