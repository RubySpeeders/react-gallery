import { combineReducers } from 'redux';

const errorMessage = (state = '', action) => {
  switch (action.type) {
    // case 'CLEAR_REGISTRATION_ERROR':
    //   return '';
    case 'GET_FAILED':
      return 'Oops! Could not get all images! Try again!';
    case 'POST_FAILED':
      return "Oops! That didn't work. Try again!";
    default:
      return state;
  }
};

export default combineReducers({
  errorMessage,
});
