import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = (props) => {
	const { isAuthenticated } = useSelector((state) => state.Auth);

	return (
		<NavigationContainer>
			{isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default RootNavigator;
