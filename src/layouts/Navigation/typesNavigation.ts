import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TCardsStackParams = {
	CARDS_PAGE: undefined;
};

export type TFavoriteCardsStackParams = {
	FAVORITE_CARDS_PAGE: undefined;
};

export type TTabStackParams = {
	CARDS_STACK: undefined;
	FAVORITE_CARDS_STACK: undefined;
};

export type TAllStack =
	| TCardsStackParams
	| TFavoriteCardsStackParams
	| TTabStackParams;

export interface IPageNavigationProps<S extends TAllStack, K extends keyof S> {
	navigation: NativeStackNavigationProp<S, S[K] extends keyof S ? S[K] : K>;
	route: RouteProp<S, S[K] extends keyof S ? S[K] : K>;
}
