import React from 'react';
import { ICard } from '#types/card';
import { ICardsContext } from '#context/CardsContext';
import { HStack, VStack } from 'native-base';
import { BaseText } from '#UI/BaseText';
import { COLORS } from '#settings/colors';
import { BaseButton } from '#UI/BaseButton';

interface ICardComponent extends ICard {
	onCardPress: ICardsContext['handlerOpenCards'];
}

const BASE_CARD_EMPTY_PARAM = 'empty';

export const CardComponent: React.FC<ICardComponent> = cardProps => {
	// Все расписывать не буду, но идея такая
	const mapArrayInfoCard = [
		{
			title: 'Название',
			value: cardProps?.name ?? BASE_CARD_EMPTY_PARAM,
		},
		{
			title: 'Описание',
			value: cardProps?.description ?? BASE_CARD_EMPTY_PARAM,
		},
		{
			title: 'Награда',
			value: cardProps?.reward ?? BASE_CARD_EMPTY_PARAM,
		},
		{
			title: 'Начало',
			value: cardProps?.period_start ?? BASE_CARD_EMPTY_PARAM,
		},
		{
			title: 'Закончим',
			value: cardProps?.period_stop ?? BASE_CARD_EMPTY_PARAM,
		},
	]
		.filter(({ value }) => value !== BASE_CARD_EMPTY_PARAM)
		.map(({ title, value }) => (
			<HStack alignItems={'center'} space={2}>
				<BaseText color={COLORS.blue600} fontWeight={'500'}>
					{title}:
				</BaseText>
				<BaseText flex={1}>{value}</BaseText>
			</HStack>
		));
	return (
		<VStack space={2}>
			{mapArrayInfoCard}
			<BaseButton OnPressButton={() => cardProps.onCardPress(cardProps)}>
				<BaseText color={COLORS.white0}>Инфа о карте</BaseText>
			</BaseButton>
		</VStack>
	);
};
