import { Alert } from 'react-native';
import {
	ADD_TO_FAVORITE_CONTACTS,
	REMOVE_FROM_FAVORITE_CONTACTS,
	REMOVE_ALL_FAVORITE_CONTACTS,
	SET_IS_FAVORITES_MULTI_SELECT,
	SELECT_FAVORITE_CONTACT,
	DESELECT_FAVORITE_CONTACT,
	CLEAR_SELECTED_FAVORITE_CONTACTS,
} from '../types';

export const addToFavoriteContacts = (newFavoriteContacts) => {
	return (dispatch) => {
		dispatch({
			type: ADD_TO_FAVORITE_CONTACTS,
			payload: newFavoriteContacts,
		});
	};
};

/* export const addToFavoriteContacts = (newFavoriteContacts) => {
	console.log('Action Fired');
	return (dispatch, getState) => {
		const { favoriteContacts } = getState().FavoriteContacts;
		if (Array.isArray(newFavoriteContacts)) {
			console.log('We Have An Array');
			var counter = 0;
			newFavoriteContacts.forEach((newFavoriteContact) => {
				if (!favoriteContacts.includes(newFavoriteContact)) {
					console.log(
						'Selected Array Contact Is Not In Favorite Contacts',
					);
					counter++;
				} else {
					console.log(
						'Selected Array Contact Already In Favorite Contacts',
					);
					Alert.alert(
						'Error',
						`${newFavoriteContact.displayName} already in favorites, Remove it from selection`,
						{
							text: 'Remove',
							style: 'destructive',
							onPress: () =>
								dispatch(deselectFavoriteContact(el1)),
						},
						{
							text: 'Cancel',
							style: 'cancel',
						},
					);
				}
			});
			if (counter.length === newFavoriteContacts.length) {
				console.log(
					'All Selected Contacts Was Not In Favorite Contacts',
				);
				dispatch({
					type: ADD_TO_FAVORITE_CONTACTS,
					payload: newFavoriteContacts,
				});
			}
		} else {
			console.log('We Have A Single Contact');
			if (!favoriteContacts.includes(newFavoriteContacts)) {
				console.log('Selected Contact Is No In Favorite Contacts');
				dispatch({
					type: ADD_TO_FAVORITE_CONTACTS,
					payload: [newFavoriteContacts],
				});
			} else {
				console.log('Selected Contact Already In Favorite Contacts');
				Alert.alert(
					'Error',
					`${newFavoriteContacts.displayName} already in favorites, Remove it from selection`,
					{
						text: 'Remove',
						style: 'destructive',
						onPress: () => dispatch(deselectFavoriteContact(el1)),
					},
					{
						text: 'Cancel',
						style: 'cancel',
					},
				);
			}
		}
	};
}; */

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
