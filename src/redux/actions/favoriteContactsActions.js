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

export const addToFavoriteContacts = (newFavoriteContacts) => {
	return (dispatch) => {
		dispatch({
			type: ADD_TO_FAVORITE_CONTACTS,
			payload: newFavoriteContacts,
		});
	};
};

export const removeFromFavoriteContacts = (tempFavoriteContacts) => {
	return (dispatch) => {
		if (Array.isArray(tempFavoriteContacts)) {
			tempFavoriteContacts.forEach((tempFavoriteContact) => {
				dispatch({
					type: REMOVE_FROM_FAVORITE_CONTACTS,
					payload: tempFavoriteContact,
				});
			});
		} else {
			dispatch({
				type: REMOVE_FROM_FAVORITE_CONTACTS,
				payload: tempFavoriteContacts,
			});
		}
	};
};

export const removeAllFavoriteContacts = () => ({
	type: REMOVE_ALL_FAVORITE_CONTACTS,
});

export const setIsFavoritesMultiSelect = (isFavoritesMultiSelect) => ({
	type: SET_IS_FAVORITES_MULTI_SELECT,
	payload: isFavoritesMultiSelect,
});

export const selectFavoriteContact = (contact) => ({
	type: SELECT_FAVORITE_CONTACT,
	payload: contact,
});

export const deselectFavoriteContact = (contact) => ({
	type: DESELECT_FAVORITE_CONTACT,
	payload: contact,
});

export const switchFavoriteContactSelection = (contact) => {
	return (dispatch, getState) => {
		const { selectedFavoriteContacts } = getState().FavoriteContacts;
		if (selectedFavoriteContacts.length === 1) {
			if (selectedFavoriteContacts.includes(contact)) {
				dispatch(deselectFavoriteContact(contact));
				dispatch(setIsFavoritesMultiSelect(false));
			} else {
				dispatch(selectFavoriteContact(contact));
			}
		} else {
			if (selectedFavoriteContacts.includes(contact)) {
				dispatch(deselectFavoriteContact(contact));
			} else {
				dispatch(selectFavoriteContact(contact));
			}
		}
	};
};

export const clearSelectedFavoriteContacts = () => ({
	type: CLEAR_SELECTED_FAVORITE_CONTACTS,
});

export const searchFavoriteContacts = (searchTerm) => {
	return (dispatch, getState) => {
		dispatch({ type: CLEAR_FAVORITE_SEARCH_RESULT });
		const { favoriteContacts } = getState().FavoriteContacts;
		let tempRes = favoriteContacts.filter((favoriteContact) =>
			favoriteContact.displayName.startsWith(searchTerm),
		);
		dispatch({
			type: ADD_TO_FAVORITE_SEARCH_RESULT,
			payload: tempRes,
		});
	};
};

export const clearFavoriteSearchResult = () => {
	return {
		type: CLEAR_FAVORITE_SEARCH_RESULT,
	};
};
