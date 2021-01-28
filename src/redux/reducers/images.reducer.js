import { combineReducers } from 'redux';

// Used to store gallery items returned from the server

const images = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.payload;
    default:
      return state;
  }
};

export default images;
