import ACTIONS from '../actions/ACTIONS';

const initialState = {
    hasFinished: true
}

const apiReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTIONS.API_REQUEST:
            return { hasFinished: false };

        case ACTIONS.API_SUCCESS:
            return { hasFinished: true }

        case ACTIONS.API_ERROR:
            return { hasFinished: true };

        default:
            return state
    }
}

export default apiReducer;
