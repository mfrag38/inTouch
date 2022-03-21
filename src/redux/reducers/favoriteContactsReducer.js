import {
	ADD_TO_FAVORITE_CONTACTS,
	REMOVE_FROM_FAVORITE_CONTACTS,
	REMOVE_ALL_FAVORITE_CONTACTS,
	SET_IS_FAVORITES_MULTI_SELECT,
	SELECT_FAVORITE_CONTACT,
	DESELECT_FAVORITE_CONTACT,
	CLEAR_SELECTED_FAVORITE_CONTACTS,
	ADD_TO_FAVORITE_SEARCH_RESULT,
	CLEAR_FAVORITE_SEARCH_RESULT,
} from '../types';

const initState = {
	favoriteContacts: [],
	isFavoritesMultiSelect: false,
	selectedFavoriteContacts: [],
	favoritesSearchResult: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITE_CONTACTS:
			return {
				...state,
				favoriteContacts: [
					...state.favoriteContacts,
					...action.payload,
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case REMOVE_FROM_FAVORITE_CONTACTS:
			return {
				...state,
				favoriteContacts: [
					...state.favoriteContacts.filter(
						(contact) => contact !== action.payload,
					),
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case REMOVE_ALL_FAVORITE_CONTACTS:
			return {
				...state,
				favoriteContacts: [],
			};
		case SET_IS_FAVORITES_MULTI_SELECT:
			return {
				...state,
				isFavoritesMultiSelect: action.payload,
			};
		case SELECT_FAVORITE_CONTACT:
			return {
				...state,
				selectedFavoriteContacts: [
					...state.selectedFavoriteContacts,
					action.payload,
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case DESELECT_FAVORITE_CONTACT:
			return {
				...state,
				selectedFavoriteContacts: [
					...state.selectedFavoriteContacts.filter(
						(contact) => contact !== action.payload,
					),
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case CLEAR_SELECTED_FAVORITE_CONTACTS:
			return {
				...state,
				selectedFavoriteContacts: [],
			};
		case ADD_TO_FAVORITE_SEARCH_RESULT:
			return {
				...state,
				favoritesSearchResult: [
					...state.favoritesSearchResult,
					...action.payload,
				],
			};
		case CLEAR_FAVORITE_SEARCH_RESULT:
			return {
				...state,
				favoritesSearchResult: [],
			};
		default:
			return state;
	}
};
