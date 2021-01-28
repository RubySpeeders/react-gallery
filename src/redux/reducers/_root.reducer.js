import { combineReducers } from 'redux';

import errorsReducer from './errors.reducer';
import images from './images.reducer';

// rootReducer is the primary reducer for this project
// It bundles up all of the other reducers so our project can use them.

const rootReducer = combineReducers({ errorsReducer, images });

export default rootReducer;
