import { put, call } from 'redux-saga/effects';

import { registerUserService } from '../../services/authenticationService.jsx';
import { userRegisterFail, userRegisterSuccess } from '../actions/auth.js';


export function* registerSaga(action) {
    try {
        const response = yield call(registerUserService, action.user);
        yield  put(userRegisterSuccess(response));
        
    } catch (error) {
        yield put(userRegisterFail('Failed to register'));
    }
}