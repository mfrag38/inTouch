import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import AdditionalUserInfoScreen from '../screens/Auth/AdditionalUserInfoScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = (props) => {
	return (
		<AuthStack.Navigator initialRouteName='SignIn'>
			<AuthStack.Screen
				name='SignIn'
				component={SignInScreen}
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
