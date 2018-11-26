import { combineReducers } from 'redux';

import api from './apiReducer';
import currencies from './currenciesReducer';

export default combineReducers({ currencies, api });
