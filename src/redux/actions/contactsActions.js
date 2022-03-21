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

export const fetchContacts = (contacts) => ({
	type: FETCH_CONTACTS,
	payload: contacts,
});

export const setIsContactsLoading = (isContactsLoading) => ({
	type: SET_IS_CONTACTS_LOADING,
	payload: isContactsLoading,
});

export const setIsContactsMultiSelect = (isContactsMultiSelect) => ({
	type: SET_IS_CONTACTS_MULTI_SELECT,
	payload: isContactsMultiSelect,
});

export const selectContact = (contact) => ({
	type: SELECT_CONTACT,
	payload: contact,
});

export const deselectContact = (contact) => ({
	type: DESELECT_CONTACT,
	payload: contact,
});

export const switchContactSelection = (contact) => {
	return (dispatch, getState) => {
		const { selectedContacts } = getState().Contacts;
		if (selectedContacts.length === 1) {
			if (selectedContacts.includes(contact)) {
				dispatch(deselectContact(contact));
				dispatch(setIsContactsMultiSelect(false));
			} else {
				dispatch(selectContact(contact));
			}
		} else {
			if (selectedContacts.includes(contact)) {
				dispatch(deselectContact(contact));
			} else {
				dispatch(selectContact(contact));
			}
		}
	};
};

export const clearSelectedContacts = () => ({
	type: CLEAR_SELECTED_CONTACTS,
});

export const searchContacts = (searchTerm) => {
	return (dispatch, getState) => {
		dispatch({ type: CLEAR_SEARCH_RESULT });
		const { contacts } = getState().Contacts;
		let tempRes = contacts.filter((contact) =>
			contact.displayName.startsWith(searchTerm),
		);
		dispatch({ type: ADD_TO_SEARCH_RESULT, payload: tempRes });
	};
};

export const clearSearchResult = () => ({ type: CLEAR_SEARCH_RESULT });
