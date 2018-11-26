import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import styles from '../public/styles.css';

import store from './store';

import ActiveCurrenciesList from './containers/ActiveCurrenciesList';
import AvailableCurrenciesList from './containers/AvailableCurrenciesList';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <ActiveCurrenciesList />
            <AvailableCurrenciesList />
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
