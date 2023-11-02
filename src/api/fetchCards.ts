import { ICard } from '#types/card';
import { BASE_API } from '@env';

export const fetchCards = async () => {
	const cards: ICard[] = await fetch(BASE_API + '/cards').then(res =>
		res.json(),
	);
	return cards;
};
