import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = (props) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const signInHandler = () => {
		setIsSignedIn(true);
	};

	const signOutHandler = () => {
		setIsSignedIn(false);
	};

	return (
		<NavigationContainer>
			{isSignedIn ? (
				<MainNavigator signOutHandler={signOutHandler} />
			) : (
				<AuthNavigator signInHandler={signInHandler} />
			)}
		</NavigationContainer>
	);
};

export default RootNavigator;
