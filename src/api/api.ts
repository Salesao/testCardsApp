import { BASE_API } from '@env';

export const apiRequest = (str: string, params?: RequestInit) => {
	return fetch(BASE_API + str, params)
		.then(res => res.json())
		.catch(err => {
			throw err;
		});
};
