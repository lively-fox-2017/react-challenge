import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getRestaurantsFromZomatoApi } from './../actions/RestaurantActions'

class RestaurantList extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.props.getRestaurantsFromZomatoApi(position.coords.latitude, position.coords.longitude);
        } else {
          this.props.getRestaurantsFromZomatoApi('-6.260239899999999', '106.7817415');
        }
      });
    } else {
      this.props.getRestaurantsFromZomatoApi('-6.260239899999999', '106.7817415');
    }
  }

  render() {
    const restaurants = this.props.restaurants.map(rest => {
      console.log(rest.image)
      return (
        <div id="restaurant" key={rest.id}>
          <div id="restaurant-img" style={{background: 'url(' + rest.image + ') center center'}}></div>
          <p>{rest.name}</p>
          <p>{rest.cuisines}</p>
          <p>{rest.location}</p>
        </div>
      )
    })
    return <div id="restaurant-container">{restaurants}</div>
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurantReducer.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurantsFromZomatoApi: (lat, lon) => dispatch(getRestaurantsFromZomatoApi(lat, lon))
});

const RestaurantListConnected = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

export default RestaurantListConnected;