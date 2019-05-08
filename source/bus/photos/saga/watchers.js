// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { type } from '../types';
// Workers
import { fillPhotos } from './workers';

function* watcherFillPhotos () {
    yield takeEvery(type.FETCH_PHOTOS_ASYNC, fillPhotos);
}

export function* watcherPhotos () {
    yield all([
        call(watcherFillPhotos)
    ]);
}
