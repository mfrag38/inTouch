import {
	SET_IS_AUTH_LOADING,
	SET_IS_CONFIRM_LOADING,
	SET_IS_ADDITIONAL_INFO_LOADING,
	SET_CONFIRMATION,
	SET_IS_AUTHENTICATED,
} from '../types';

export const setIsAuthLoading = (isAuthLoading) => ({
	type: SET_IS_AUTH_LOADING,
	payload: isAuthLoading,
});

export const setIsConfirmLoading = (isConfirmLoading) => ({
	type: SET_IS_CONFIRM_LOADING,
	payload: isConfirmLoading,
});

export const setIsAddLoading = (isAddLoading) => ({
	type: SET_IS_ADDITIONAL_INFO_LOADING,
	payload: isAddLoading,
});

export const setConfirmation = (confirmation) => ({
	type: SET_CONFIRMATION,
	payload: confirmation,
});

export const setIsAuthenticated = (isAuthenticated) => ({
	type: SET_IS_AUTHENTICATED,
	payload: isAuthenticated,
});
