import { BaseEmptyComponent } from '#UI/BaseEmptyComponent';
import { useCardsContext } from '#context/CardsContext';
import { COLORS } from '#settings/colors';
import { ICard } from '#types/card';
import { Box, FlatList, IScrollViewProps, View } from 'native-base';
import React from 'react';
import { ActivityIndicator, ListRenderItem } from 'react-native';
import { CardComponent } from './CardComponent';

interface ICardsList extends IScrollViewProps {
	myCards: ICard[];
}

export const CardsList: React.FC<ICardsList> = ({ myCards, ...props }) => {
	const { isLoadingGetCards, handlerOpenCards } = useCardsContext();

	const renderEmptyComponent = () => {
		if (isLoadingGetCards) {
			return (
				<View justifyContent={'center'} alignItems={'center'}>
					<ActivityIndicator color={COLORS.blue600} size={'large'} />
				</View>
			);
		} else {
			return <BaseEmptyComponent />;
		}
	};

	const renderCards: ListRenderItem<ICard> = ({ item }) => {
		return <CardComponent {...item} onCardPress={handlerOpenCards} />;
	};

	return (
		<FlatList
			flex={1}
			bg={COLORS.white0}
			_contentContainerStyle={{
				p: 4,
			}}
			keyExtractor={({ card_id }) => String(card_id)}
			data={myCards}
			renderItem={renderCards}
			ListEmptyComponent={renderEmptyComponent}
			ItemSeparatorComponent={() => (
				<Box my={4} borderTopWidth={1} borderTopColor={COLORS.gray300} />
			)}
			{...props}
		/>
	);
};
