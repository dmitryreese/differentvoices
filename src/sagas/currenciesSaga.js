import { takeLatest, call, put } from 'redux-saga/effects';

import ACTIONS from '../store/actions/ACTIONS';
import { apiSuccess, apiError, updateData } from '../store/actions';

const getData = async (url) => {
    const res = await fetch(url);
    return res.json();
}

function* worker(action) {
    try {
        const { payload } = action;
        const response = yield call(getData, payload.url);
        yield put(apiSuccess());
        yield put(payload.callback(response));
    }
    catch (error) {
        yield put(apiError({ error }));
    }
}

function* watcher() {
    yield takeLatest(ACTIONS.API_REQUEST, worker);
}

export default watcher;
