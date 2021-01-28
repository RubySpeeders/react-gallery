import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImage(action) {
  try {
    yield axios.post(`/api/gallery`, action.payload);
    yield put({
      type: 'GET_IMAGES',
    });
  } catch (err) {
    console.log('error posting image', err);
    yield put({ type: 'POST_FAILED' });
  }
}

function* getImages() {
  try {
    //axios call to get all images
    const response = yield axios.get('/api/gallery');
    console.log(response);
    yield put({
      type: 'SET_IMAGES',
      payload: response.data,
    });
  } catch (err) {
    console.log('error getting gallery images', err);
    yield put({ type: 'GET_FAILED' });
  }
}

function* deleteImage(action) {
  try {
    //axios call to delete image
    yield axios.delete(`/api/gallery/${action.payload}`);
    yield put({
      type: 'GET_IMAGES',
    });
  } catch (err) {
    console.log('error deleting image', err);
    yield put({ type: 'DELETE_FAILED' });
  }
}

function* imageSaga() {
  yield takeLatest('GET_IMAGES', getImages);
  yield takeLatest('POST_IMAGE', postImage);
  yield takeLatest('DELETE_IMAGE', deleteImage);
}

export default imageSaga;
