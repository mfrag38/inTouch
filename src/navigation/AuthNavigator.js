import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import AdditionalUserInfoScreen from '../screens/Auth/AdditionalUserInfoScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = (props) => {
	const { signInHandler } = props;

	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name='SignIn'
				component={SignInScreen}
				options={{
					headerShown: false,
				}}
				initialParams={{ signInHandler: signInHandler }}
			/>
			<AuthStack.Screen
				name='SignUp'
				component={SignUpScreen}
				options={{
					headerShown: false,
				}}
			/>
			<AuthStack.Screen
				name='AdditionalUserInfo'
				component={AdditionalUserInfoScreen}
				options={{
					headerShown: false,
				}}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthNavigator;
