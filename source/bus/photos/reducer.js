//Core
import { fromJS } from 'immutable';
// Types
import { type } from './types';

const initalState = fromJS([]);

export const photosReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_PHOTOS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
