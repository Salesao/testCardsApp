import { CardsContextProvider } from '#context/CardsContext';
import { useFlipper } from '@react-navigation/devtools';
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native';
import App from 'App';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

interface IProviders {}

export const Providers: React.FC<IProviders> = () => {
	const navigationRef = useNavigationContainerRef();
	useFlipper(navigationRef);
	return (
		<NativeBaseProvider>
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<NavigationContainer ref={navigationRef}>
					<CardsContextProvider>
						<App />
					</CardsContextProvider>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
};
