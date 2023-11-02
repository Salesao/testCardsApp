import React from 'react';
import { ERoutes } from '#routes/route';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';

const { Navigator, Screen } = createNativeStackNavigator();

export const NoNavbarNavigation: React.FC = () => {
	return (
		<Navigator initialRouteName={ERoutes.TABS}>
			<Screen
				name={ERoutes.TABS}
				options={{
					headerShown: false,
				}}
				component={NavigationTab}
			/>
		</Navigator>
	);
};
