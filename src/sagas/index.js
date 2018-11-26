import { all } from 'redux-saga/effects';

import currenciesSaga from './currenciesSaga';

export default function* rootSaga() {
    yield all([ currenciesSaga() ]);
}
