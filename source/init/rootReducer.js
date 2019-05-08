// Core
import { combineReducers } from 'redux';
// Reducers
import { photosReducer as photos } from '../bus/photos/reducer';

export const rootReducer = combineReducers({
    photos,
});
