import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { registerReducer } from './reducers/registerReducer';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
           reg: registerReducer
       }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    console.log('response store');
    sagaMiddleware.run(rootSaga);

    return store;

}