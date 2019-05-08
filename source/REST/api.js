import { ROOT_URL, client_id } from './';

export const api = {
    photos: {
        fetch () {
            const _filter = `?client_id=${client_id}`;

            return fetch(`${ROOT_URL}/${_filter}`, {
                method:  'GET',
                headers: {
                },
            });
        },

    },
};
