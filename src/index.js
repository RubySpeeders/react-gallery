import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';
// import rootReducer from './redux/reducers/_root.reducer';

const galleryItems = (state = [], action) => {
  if (action.type === 'GET_GALLERY_ITEMS') {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({ galleryItems }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
