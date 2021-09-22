import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { registerReducer } from './reducers/registerReducer';
import { loginReducer } from './reducers/loginReducer';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            reg: registerReducer,
            log: loginReducer
       }),
        composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
    );
    console.log('response store');
    sagaMiddleware.run(rootSaga);

    return store;

}