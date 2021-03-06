import { combineReducers } from 'redux';

const errorMessage = (state = '', action) => {
  switch (action.type) {
    case 'DELETE_FAILED':
      return 'Oops! Could not delete. Try again!';
    case 'GET_FAILED':
      return 'Oops! Could not get all images! Try again!';
    case 'POST_FAILED':
      return "Oops! That didn't work. Try again!";
    case 'UPDATE_LIKES_FAILED':
      return "Oops! That didn't work. Try liking again!";
    default:
      return state;
  }
};

export default errorMessage;
