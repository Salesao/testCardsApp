import { CardsList } from '#components/CardsList';
import { useCardsContext } from '#context/CardsContext';
import React from 'react';

interface ICardsPage {}

export const CardsPage: React.FC<ICardsPage> = () => {
	const { cards } = useCardsContext();
	return <CardsList myCards={cards} />;
};
