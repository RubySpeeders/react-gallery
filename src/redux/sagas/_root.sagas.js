import { all } from 'redux-saga/effects';

//import all sagas
import imageSaga from './image.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
  yield all([
    imageSaga(), //image saga is now imported into root saga
  ]);
}
