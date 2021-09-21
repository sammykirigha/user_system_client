
import { REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, SET_MESSAGE } from '../types/types';

export const userRegister = (user) => {
    return ({
        type: REGISTER_USER,
        user
    })
}

export const userRegisterSuccess = (message) => {
    return({
        type: REGISTER_USER_SUCCESS,
        message
    })
};

export const userRegisterFail = (error) => {
    return ({
        type: REGISTER_USER_FAIL,
        error
    })
}