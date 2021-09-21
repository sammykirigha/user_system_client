import { fork } from 'redux-saga/effects';

import watchUserAuthentication from './watcher';

export default function* rootSaga() {
    yield fork(watchUserAuthentication);
}