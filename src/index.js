import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import SignInScreen from './screens/Auth/SignInScreen';
import ContactsScreen from './screens/ContactsScreen';
import FavoriteContactsScreen from './screens/FavoriteContactsScreen';
import AdditionalUserInfoScreen from './screens/Auth/AdditionalUserInfoScreen';
import MobileConfirmationSheet from './screens/Auth/MobileConfirmationSheet';

const App = () => {
	return <RootNavigator />;
	// return <MobileConfirmationSheet />;
	// return <AdditionalUserInfoScreen />;
	// return <FavoriteContactsScreen />;
	// return <ContactsScreen />;
	// return <SignUpScreen />;
	// return <SignInScreen />;
};

export default App;
