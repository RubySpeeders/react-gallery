import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.sagas';

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  rootReducer,
  //Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

//Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
