import React from 'react';
import { BaseText } from './BaseText';
import { ITextProps } from 'native-base';

interface IBaseEmptyComponent extends ITextProps {
	translationText?: string;
	renderEmptyComponent?: () => JSX.Element;
}

export const BaseEmptyComponent: React.FC<IBaseEmptyComponent> = ({
	translationText,
	renderEmptyComponent,
	...props
}) => {
	if (typeof renderEmptyComponent === 'function') {
		return renderEmptyComponent();
	}
	return (
		<BaseText fontSize={18} fontWeight={'500'} textAlign={'center'} {...props}>
			{translationText ?? 'Нет данных'}
		</BaseText>
	);
};

export const renderBaseEmpty = () => <BaseEmptyComponent />;
