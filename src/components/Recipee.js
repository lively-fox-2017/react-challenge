import React from 'react';

const loading = () => <h2>Loading ...</h2>

const recipeeListItem = (recipee) => (
  <div className="recipee-wrapper">
    <img src={recipee.thumbnail} alt={recipee.title}></img>
    <div className="recipee-info">
      <p>{recipee.title}</p>
      <p>{recipee.ingredients}</p>
    </div>
    <a href={recipee.href} target="_blank">Recipee Link</a>
  </div>
);

const Recipee = (props) => props.recipee ? recipeeListItem(props.recipee) : loading();

export default Recipee;