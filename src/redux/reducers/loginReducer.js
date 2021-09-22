import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../types/types';

export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    }
};