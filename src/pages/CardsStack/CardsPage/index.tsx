import { CardsList } from '#components/CardsList';
import { useCardsContext } from '#context/CardsContext';
import { useInterval } from '#hooks/useInterval';
import React from 'react';

interface ICardsPage {}

export const CardsPage: React.FC<ICardsPage> = () => {
	const { cards, handlerGetCards, isLoadingGetCards, isStartInterval } =
		useCardsContext();

	const handlerInterval = () => handlerGetCards(false);

	useInterval(handlerInterval, isStartInterval ? 1000 * 10 : null);

	return <CardsList myCards={cards} isLoadingGetCards={isLoadingGetCards} />;
};
