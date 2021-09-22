import { fork } from 'redux-saga/effects';
import watchUserLoggin from './login/loginWatcher';
import watchUserAuthentication from './register/watcher';


export default function* rootSaga() {
    yield fork(watchUserAuthentication);
    yield fork(watchUserLoggin);
}