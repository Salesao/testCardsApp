import { ICard } from '#types/card';

export const addCard = (
	card: Omit<ICard, 'card_id' | 'photo_required' | 'schedule'>,
) => {
	return (prevCard: ICard[]) => {
		return [...prevCard, card];
	};
};
