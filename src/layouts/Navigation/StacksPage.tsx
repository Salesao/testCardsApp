import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	TCardsStackParams,
	TFavoriteCardsStackParams,
} from './typesNavigation';
import { ERoutes } from '#routes/route';
import { CardsPage } from '#pages/CardsStack/CardsPage';
import { FavoriteCardsPage } from '#pages/FavoriteCardsStack/FavoriteCardsPage';
import React from 'react';

const CardsNavigatorStack = createNativeStackNavigator<TCardsStackParams>();
const FavoriteCardsNavigatorStack =
	createNativeStackNavigator<TFavoriteCardsStackParams>();

export const CardsStack: React.FC = () => {
	return (
		<CardsNavigatorStack.Navigator initialRouteName={ERoutes.CARDS_PAGE}>
			<CardsNavigatorStack.Screen
				name={ERoutes.CARDS_PAGE}
				component={CardsPage}
				options={{
					title: 'Карточки',
					headerTitleAlign: 'center',
				}}
			/>
		</CardsNavigatorStack.Navigator>
	);
};

export const FavoriteCardsStack: React.FC = () => {
	return (
		<FavoriteCardsNavigatorStack.Navigator
			initialRouteName={ERoutes.FAVORITE_CARDS_PAGE}
		>
			<FavoriteCardsNavigatorStack.Screen
				name={ERoutes.FAVORITE_CARDS_PAGE}
				component={FavoriteCardsPage}
				options={{
					title: 'Избранные карточки',
					headerTitleAlign: 'center',
				}}
			/>
		</FavoriteCardsNavigatorStack.Navigator>
	);
};
