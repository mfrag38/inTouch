import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from '../screens/ContactsScreen';
import FavoriteContactsScreen from '../screens/FavoriteContactsScreen';

const MainStack = createNativeStackNavigator();

const MainNavigator = (props) => {
	const { signOutHandler } = props;

	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name='Contacts'
				component={ContactsScreen}
				options={{
					headerShown: false,
				}}
				initialParams={{ signOutHandler: signOutHandler }}
			/>
			<MainStack.Screen
				name='FavoriteContacts'
				component={FavoriteContactsScreen}
				options={{
					headerShown: false,
				}}
			/>
		</MainStack.Navigator>
	);
};

export default MainNavigator;
