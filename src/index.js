import React from 'react';
import SignInScreen from './screens/Auth/SignInScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import ContactsScreen from './screens/ContactsScreen';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
	return <RootNavigator />;
	// return <ContactsScreen />;
	// return <SignUpScreen />;
	// return <SignInScreen />;
};

export default App;
