import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateLikes(action) {
  try {
    //PUT route to change the amount of likes of a photo in gallery
    yield axios.put(`/api/gallery/like/${action.payload}`);
    yield put({
      type: 'GET_IMAGES',
    });
  } catch (err) {
    console.log('error updating likes', err);
    yield put({ type: 'UPDATE_LIKES_FAILED' });
  }
}

function* likesSaga() {
  yield takeLatest('UPDATE_IMAGE_LIKES', updateLikes);
}

export default likesSaga;
