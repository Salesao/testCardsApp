import { fetchCards } from '#api/fetchCards';
import { useEffectOnce } from '#hooks/useEffectOnce';
import { ICard, TNullOrAny, TTypeCard } from '#types/card';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { Alert, AlertButton } from 'react-native';

export interface ICardsContext {
	cards: ICard[];
	favoriteCards: ICard[];
	handlerAddFavoriteCard: (card: ICard, callback?: () => void) => () => void;
	handlerDeleteFavoriteCard: (
		idCard: number,
		callback?: () => void,
	) => () => void;
	isLoadingGetCards: boolean;
	handlerGetCards: () => Promise<void>;
	handlerOpenCards: (card: ICard) => void;
}

const CardsContext = createContext<TNullOrAny<ICardsContext>>(null);

export const useCardsContext = () => useContext(CardsContext);

interface ICardsContextProvider {
	children: React.ReactNode;
}

const filterCardByType = (type: TTypeCard) => {
	return (card: ICard) => card.type === type;
};

export const CardsContextProvider: React.FC<ICardsContextProvider> = ({
	children,
}) => {
	const [cards, setCards] = useState<ICardsContext['cards']>([]);
	const [favoriteCards, setFavoriteCards] = useState<
		ICardsContext['favoriteCards']
	>([]);
	const [isLoadingGetCards, setIsLoadingGetCards] = useState(true);

	const handlerAddFavoriteCard = useCallback(
		(card: ICard, callback?: () => void) => {
			return () => {
				setFavoriteCards(prevCard => [...prevCard, card]);
				callback?.();
			};
		},
		[],
	);

	const handlerDeleteFavoriteCard = useCallback(
		(idCard: number, callback?: () => void) => {
			return () => {
				setFavoriteCards(prevCard =>
					prevCard.filter(({ card_id }) => card_id !== idCard),
				);
				callback?.();
			};
		},
		[],
	);

	const handlerGetCards = useCallback(async () => {
		setIsLoadingGetCards(true);
		try {
			const cardsFetch = await fetchCards();
			setCards(cardsFetch);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoadingGetCards(false);
		}
	}, []);

	const handlerOpenCards = useCallback(
		(card: ICard) => {
			const infoCard = [
				{
					title: 'Имя',
					value: card.name,
				},
				{
					title: 'Описание',
					value: card?.description ?? 'Нет данных',
				},
			];
			const isCardFavorite = favoriteCards.some(
				({ card_id }) => card_id === card.card_id,
			);
			const alertButtons: AlertButton[] = [
				{
					text: isCardFavorite
						? 'Удалить из избранного'
						: 'Добавить в избранное',
					onPress: isCardFavorite
						? handlerDeleteFavoriteCard(card.card_id)
						: handlerAddFavoriteCard(card),
				},
				{
					text: 'Закрыть',
				},
			];
			Alert.alert(
				'Информация',
				infoCard.map(({ title, value }) => `${title}: ${value}`).join('\n'),
				alertButtons,
			);
		},
		[favoriteCards, handlerAddFavoriteCard, handlerDeleteFavoriteCard],
	);

	useEffectOnce(() => {
		handlerGetCards();
	});

	return (
		<CardsContext.Provider
			value={{
				cards,
				favoriteCards,
				handlerAddFavoriteCard,
				handlerDeleteFavoriteCard,
				handlerGetCards,
				isLoadingGetCards,
				handlerOpenCards,
			}}
		>
			{children}
		</CardsContext.Provider>
	);
};
