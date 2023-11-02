import { COLORS } from '#settings/colors';
import { ITextProps, Text } from 'native-base';
import React from 'react';

interface IBaseText extends ITextProps {
	children: React.ReactNode;
}

export const BaseText: React.FC<IBaseText> = ({ children, ...props }) => {
	return (
		<Text
			fontSize={props?.fontSize ?? 16}
			color={COLORS.black0}
			fontWeight={'400'}
			{...props}
		>
			{children}
		</Text>
	);
};
