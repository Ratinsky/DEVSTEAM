import { type } from './types';

export const photosActions = {
    // Sync
    fillPhotos: (photos) => {
        return {
            type:    type.FILL_PHOTOS,
            payload: photos,
        };
    },
    // Async
    fetchPhotosAsync: () => {
        return {
            type: type.FETCH_PHOTOS_ASYNC,
        };
    },
};
