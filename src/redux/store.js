import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './reducers/authReducer';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['Auth'],
};

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	blacklist: ['isAuthLoading', 'isAddLoading', 'confirmation'],
};

const rootReducer = combineReducers({
	Auth: persistReducer(authPersistConfig, authReducer),
});

export const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	applyMiddleware(thunk),
);

export const persistor = persistStore(store);
