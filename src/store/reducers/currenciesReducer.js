import ACTIONS from '../actions/ACTIONS';

const makeActiveCurrency = (name, rate) => ({ name, rate: rate.toFixed(2) });

const initialState = {
    available: JSON.parse(localStorage.getItem('availableCurrencies')) || [],
    active: JSON.parse(localStorage.getItem('activeCurrencies')) || []
}

const currenciesReducer = (state = initialState, action) => {
    let available = [];
    let active = [];
    let { payload } = action;

    const updateStorage = (active, available) => {
        localStorage.setItem('activeCurrencies', JSON.stringify(active));
        localStorage.setItem('availableCurrencies', JSON.stringify(available));
    }

    switch (action.type) {
        case (ACTIONS.FETCH_AVAILABLE):
            available = Object.keys(payload.rates).map(name => ({ name }));

            updateStorage(state.active, available);
            
            return { ...state, available }

        case ACTIONS.UPDATE_DATA:
            active = state.active.map(currency =>
                makeActiveCurrency(currency.name, Math.random()));
            
            updateStorage(active, state.available);

            return { ...state, active };

        case ACTIONS.ADD_CURRENCY:
            available = state.available.filter(currency =>
                currency.name !== payload.currency.name);
            active = [ ...state.active, makeActiveCurrency(payload.currency.name, Math.random()) ];
            
            updateStorage(active, available);

            return { ...state, available, active };

        case ACTIONS.DELETE_CURRENCY:
            available = [ ...state.available, payload.currency ];
            active = state.active.filter(currency =>
                currency.name !== payload.currency.name);
            
            updateStorage(active, available);

            return { ...state, available, active };

        default:
            return state;
    }
}

export default currenciesReducer;
