import { ICard } from '#types/card';
import { apiRequest } from './api';

export const fetchCards = async () => {
	const cards: ICard[] = await apiRequest('/cards');
	return cards;
};
