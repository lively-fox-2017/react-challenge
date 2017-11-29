import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    recipee: state.recipeeReducer.recipees.find(recipee => recipee.id === Number(ownProps.match.params.id))
  }
}

const loading = () => <h2>Loading ...</h2>

const recipeeListItem = (recipee) => (
  <div className="recipee-wrapper">
    <img src={recipee.thumbnail} alt={recipee.title}></img>
    <div className="recipee-info">
      <p>{recipee.title}</p>
      <p>Ingridients: {recipee.ingredients}</p>
    </div>
    <a href={recipee.href} target="_blank">Recipee Link</a>
  </div>
);

const Recipee = (props) => props.recipee ? recipeeListItem(props.recipee) : loading();

const RecipeeConnected = connect(mapStateToProps)(Recipee);
export default RecipeeConnected;