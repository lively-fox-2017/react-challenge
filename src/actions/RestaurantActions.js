import axios from 'axios';

export const setRestaurants = (restaurants) => ({
  type: 'SET_RESTAURANTS',
  payload: { 
    restaurants: restaurants.map(restaurant => {
      return {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        location: restaurant.restaurant.location.address,
        cuisines: restaurant.restaurant.cuisines,
        image: restaurant.restaurant.featured_image
      }
    })
  }
});

export const getRestaurantsFromZomatoApi = (lat, lon) => {
  const URL = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`;

  return (dispatch, getState) => {
    axios.get(URL, {headers: {'user-key': '668cf0ff7ba91ccbeafd4ae1c6159916'}})
    .then(response => {
      dispatch(setRestaurants(response.data.restaurants));
    })
    .catch(err => {
      console.log(err);
    });
  }

};