import jwt_decode from 'jwt-decode';
import Validator from 'validator';

export const isTokenExpired = token => {
    const currentTime = new Date() / 1000;
    if (jwt_decode(token).exp < currentTime) {
        localStorage.removeItem('token');
        return true;
    }
    return false;
};

export const getUsername = token => {
    if (token) {
        return jwt_decode(token).username;
    }
    return null;
};

export const validateProjectData = (data) => {
    const errors = {};
    if (Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
    if (Validator.isEmpty(data.duration)) errors.duration = 'duration can\'t be blank';
    return errors;
};