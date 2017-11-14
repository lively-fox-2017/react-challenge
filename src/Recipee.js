import React from 'react';

const Recipee = (props) => {
  return (
    <div class="recipee-wrapper">
      <img src={props.recipee.thumbnail} alt={props.recipee.title}></img>
      <div class="recipee-info">
        <p>{props.recipee.title}</p>
        <p>{props.recipee.ingredients}</p>
      </div>
      <a href={props.recipee.href} target="_blank">Recipee Link</a>
    </div>
  )
}

export default Recipee