import ACTIONS from '../actions/ACTIONS';

const initialState = {
    currencies: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_CURRENCY:
        case ACTIONS.DELETE_CURRENCY:
        case ACTIONS.TRACK_STATUS:
        default:
            return state
    }
}

export default rootReducer;
