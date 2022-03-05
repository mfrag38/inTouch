import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = (props) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const signInHandler = () => {
		setIsSignedIn(true);
	};

	const signOutHandler = () => {
		auth()
			.signOut()
			.then(
				() => {
					console.log('Fulfilled');
					setIsSignedIn(false);
				},
				(reason) => {
					console.log('Rejection Reason', reason);
				},
			)
			.catch((error) => {
				console.log('Sign out Error:', error);
			});
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
