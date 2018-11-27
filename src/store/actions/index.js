import ACTIONS from './ACTIONS';

export const addCurrency = (payload) => ({ type: ACTIONS.ADD_CURRENCY, payload });
export const deleteCurrency = (payload) => ({ type: ACTIONS.DELETE_CURRENCY, payload });
export const updateData = (payload) => ({ type: ACTIONS.UPDATE_DATA, payload });

export const apiRequest = (payload) => ({ type: ACTIONS.API_REQUEST, payload });
export const apiSuccess = () => ({ type: ACTIONS.API_SUCCESS });
export const apiError = (payload) => ({ type: ACTIONS.API_ERROR, payload });

export const fetchAvailable = (payload) => ({ type: ACTIONS.FETCH_AVAILABLE, payload });
