import { CardsList } from '#components/CardsList';
import { useCardsContext } from '#context/CardsContext';
import React from 'react';

interface IFavoriteCardsPage {}

export const FavoriteCardsPage: React.FC<IFavoriteCardsPage> = () => {
	const { favoriteCards } = useCardsContext();
	return <CardsList myCards={favoriteCards} />;
};
