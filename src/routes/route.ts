import { FC } from 'react';
import * as Stacks from '#layouts/Navigation/StacksPage';

export enum ERoutes {
	TABS = 'TABS',
	CARDS_STACK = 'CARDS_STACK',
	FAVORITE_CARDS_STACK = 'FAVORITE_CARDS_STACK',
	CARDS_PAGE = 'CARDS_PAGE',
	FAVORITE_CARDS_PAGE = 'FAVORITE_CARDS_PAGE',
}

export type TRouteTabName = ERoutes.CARDS_STACK | ERoutes.FAVORITE_CARDS_STACK;

export interface IRoutes {
	id: ERoutes;
	title: string;
	component: FC<any>;
}

export type TRoutesObj<T extends string> = Record<T, IRoutes>;

export const RoutesTab: TRoutesObj<TRouteTabName> = {
	[ERoutes.CARDS_STACK]: {
		id: ERoutes.CARDS_STACK,
		title: 'Карточки',
		component: Stacks.CardsStack,
	},
	[ERoutes.FAVORITE_CARDS_STACK]: {
		id: ERoutes.FAVORITE_CARDS_STACK,
		title: 'Любимые карточки',
		component: Stacks.FavoriteCardsStack,
	},
};
