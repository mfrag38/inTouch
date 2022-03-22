import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import Reactotron from '../ReactotronConfig';
import authReducer from './reducers/authReducer';
import contactsReducer from './reducers/contactsReducer';
import favoriteContactsReducer from './reducers/favoriteContactsReducer';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['Auth', 'Contacts'],
};

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	blacklist: [
		'isAuthLoading',
		'isConfirmLoading',
		'isAddLoading',
		'confirmation',
	],
};

const favoriteContactsPersistConfig = {
	key: 'favoriteContacts',
	storage: AsyncStorage,
	blacklist: [
		'isFavoritesMultiSelect',
		'selectedFavoriteContacts',
		'favoritesSearchResult',
	],
};

const rootReducer = combineReducers({
	Auth: persistReducer(authPersistConfig, authReducer),
	Contacts: contactsReducer,
	FavoriteContacts: persistReducer(
		favoriteContactsPersistConfig,
		favoriteContactsReducer,
	),
});

export const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);

export const persistor = persistStore(store);
