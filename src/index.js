import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import RootNavigator from './navigation/RootNavigator';
import SignInScreen from './screens/Auth/SignInScreen';
import ContactsScreen from './screens/ContactsScreen';
import FavoriteContactsScreen from './screens/FavoriteContactsScreen';
import AdditionalUserInfoScreen from './screens/Auth/AdditionalUserInfoScreen';
import MobileConfirmationSheet from './screens/Auth/MobileConfirmationSheet';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RootNavigator />
				{/* <MobileConfirmationSheet /> */}
				{/* <AdditionalUserInfoScreen /> */}
				{/* <FavoriteContactsScreen /> */}
				{/* <ContactsScreen /> */}
				{/* <SignInScreen /> */}
			</PersistGate>
		</Provider>
	);
	// return <MobileConfirmationSheet />;
	// return <AdditionalUserInfoScreen />;
	// return <FavoriteContactsScreen />;
	// return <ContactsScreen />;
	// return <SignInScreen />;
};

export default App;
