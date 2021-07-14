import axios from 'axios';

export const fetchUserByUsername = (username) => {
  return axios
    .get(`https://my-nc-games-frontend-app.herokuapp.com/api/users/${username}`)
    .then((response) => {
      return response.data.user;
    });
};

export const fetchReviews = () => {
  return axios
    .get('https://my-nc-games-frontend-app.herokuapp.com/api/reviews/')
    .then((response) => {
      return response.data.reviews;
    });
};
