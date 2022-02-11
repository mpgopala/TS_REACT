import {takeEvery, takeLatest, call, put, delay} from 'redux-saga/effects'

import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../Actions'

import axios from 'axios';
import { fetchUsersFailure, fetchUsersSuccess } from '../ActionCreators';

function getUsersApi() {
    return   axios.get("http://jsonplaceholder.typicode.com/users")
    .then( response => response.data)
}

function* fetchUsers() {
    try {
        yield delay(5000);
        const users = yield call(getUsersApi);
        yield put(fetchUsersSuccess(users));
    } catch(e) {
        console.log(e)
        yield put(fetchUsersFailure(e));
    }
}

function* userSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;