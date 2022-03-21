import {
	SET_IS_AUTH_LOADING,
	SET_IS_CONFIRM_LOADING,
	SET_IS_ADDITIONAL_INFO_LOADING,
	SET_CONFIRMATION,
	SET_IS_AUTHENTICATED,
} from '../types';

const initState = {
	isAuthLoading: false,
	isConfirmLoading: false,
	isAddLoading: false,
	confirmation: null,
	isAuthenticated: true,
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_AUTH_LOADING:
			return {
				...state,
				isAuthLoading: action.payload,
			};
		case SET_IS_CONFIRM_LOADING:
			return {
				...state,
				isConfirmLoading: action.payload,
			};
		case SET_IS_ADDITIONAL_INFO_LOADING:
			return {
				...state,
				isAddLoading: action.payload,
			};
		case SET_CONFIRMATION:
			return {
				...state,
				confirmation: action.payload,
			};
		case SET_IS_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: action.payload,
			};
		default:
			return state;
	}
};
