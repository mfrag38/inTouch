import {
	FETCH_CONTACTS,
	SET_IS_CONTACTS_LOADING,
	SET_IS_CONTACTS_MULTI_SELECT,
	SELECT_CONTACT,
	DESELECT_CONTACT,
	CLEAR_SELECTED_CONTACTS,
	ADD_TO_SEARCH_RESULT,
	CLEAR_SEARCH_RESULT,
} from '../types';

const initState = {
	contacts: null,
	isContactsLoading: false,
	isContactsMultiSelect: false,
	selectedContacts: [],
	searchResult: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case FETCH_CONTACTS:
			return {
				...state,
				contacts: action.payload,
			};
		case SET_IS_CONTACTS_LOADING:
			return {
				...state,
				isContactsLoading: action.payload,
			};
		case SET_IS_CONTACTS_MULTI_SELECT:
			return {
				...state,
				isContactsMultiSelect: action.payload,
			};
		case SELECT_CONTACT:
			return {
				...state,
				selectedContacts: [
					...state.selectedContacts,
					action.payload,
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case DESELECT_CONTACT:
			return {
				...state,
				selectedContacts: [
					...state.selectedContacts.filter(
						(contact) => contact !== action.payload,
					),
				].sort((a, b) => {
					if (a.displayName < b.displayName) return -1;
					if (a.displayName > b.displayName) return 1;
					return 0;
				}),
			};
		case CLEAR_SELECTED_CONTACTS:
			return {
				...state,
				selectedContacts: [],
			};
		case ADD_TO_SEARCH_RESULT:
			return {
				...state,
				searchResult: [...state.searchResult, ...action.payload],
			};
		case CLEAR_SEARCH_RESULT:
			return {
				...state,
				searchResult: [],
			};
		default:
			return state;
	}
};
