import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../../types/types';
import { loginSaga } from './loginSaga';


export default function* watchUserLoggin() {
    yield takeLatest(LOGIN, loginSaga);
}