import { COLORS } from '#settings/colors';
import { IButtonProps } from 'native-base/lib/typescript/components/primitives/Button/types';
import React, { useRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withSequence,
	withTiming,
	WithTimingConfig,
} from 'react-native-reanimated';
import { ButtonAnimated } from './AnimatedComponents';

export interface IBaseButton
	extends Omit<
		IButtonProps,
		'onPress' | 'onPressIn' | 'onPressOut' | 'bg' | 'style'
	> {
	children: React.ReactNode;
	OnPressButton: () => void;
	bg?: string;
	dopStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}
export const BaseButton: React.FC<IBaseButton> = ({
	children,
	OnPressButton,
	bg = COLORS.blue600,
	dopStyle,
	...props
}) => {
	const scaleAnim = useSharedValue(1);

	const styleScale = useAnimatedStyle(
		() => ({
			// @ts-ignore
			transform: [{ scale: scaleAnim.value }],
		}),
		[scaleAnim.value],
	);

	const defaultScaleOption = useRef<WithTimingConfig>({
		duration: 100,
		easing: Easing.linear,
	}).current;

	const handlerPressButton = () => {
		OnPressButton?.();
		scaleAnim.value = withSequence(
			withTiming(0.9, defaultScaleOption),
			withTiming(1, defaultScaleOption),
		);
	};

	const handlerPressInOut = (scale: number) => {
		return () => {
			scaleAnim.value = withTiming(scale, defaultScaleOption);
		};
	};

	return (
		<ButtonAnimated
			_loading={{
				_text: {
					fontFamily: 'body',
					fontWeight: '500',
					fontSize: 16,
				},
				opacity: 0.8,
			}}
			_pressed={{
				bg,
				opacity: 1,
			}}
			style={[styleScale, dopStyle]}
			onPress={handlerPressButton}
			borderRadius={30}
			bg={bg}
			onPressIn={handlerPressInOut(0.9)}
			onPressOut={handlerPressInOut(1)}
			py={4}
			{...props}
		>
			{children}
		</ButtonAnimated>
	);
};
