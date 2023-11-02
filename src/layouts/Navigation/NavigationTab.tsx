import React from 'react';
import { ERoutes, RoutesTab, TRouteTabName } from '#routes/route';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TTabStackParams } from './typesNavigation';
import { COLORS } from '#settings/colors';

const { Navigator, Screen } = createBottomTabNavigator<TTabStackParams>();

export const NavigationTab: React.FC = () => {
	return (
		<Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
			initialRouteName={ERoutes.CARDS_STACK}
		>
			{Object.keys(RoutesTab).map((name: TRouteTabName) => (
				<Screen
					key={RoutesTab[name].id}
					name={name}
					options={() => ({
						title: RoutesTab[name].title,
						headerShadowVisible: false,
						tabBarActiveTintColor: COLORS.blue600,
						headerShown: false,
					})}
					component={RoutesTab[name].component}
				/>
			))}
		</Navigator>
	);
};
