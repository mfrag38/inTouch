import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import SignInScreen from './screens/Auth/SignInScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import ContactsScreen from './screens/ContactsScreen';
import FavoriteContactsScreen from './screens/FavoriteContactsScreen';
import AdditionalUserInfoScreen from './screens/Auth/AdditionalUserInfoScreen';

const App = () => {
	return <RootNavigator />;
	// return <AdditionalUserInfoScreen />;
	// return <FavoriteContactsScreen />;
	// return <ContactsScreen />;
	// return <SignUpScreen />;
	// return <SignInScreen />;
};

export default App;
