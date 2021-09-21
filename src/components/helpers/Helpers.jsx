import jwt_decode from 'jwt-decode';
import Validator from 'validator';

export const isTokenExpired = token => {
    const currentTime = new Date() / 1000;
    if (jwt_decode(token).exp < currentTime) {
        localStorage.removeItem('theJWT');
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

export const formatDate = eventDate => {
    const date = new Date(eventDate);
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const year = date.getFullYear();
    return [year, month, day].join('-');
};

export const validateProjectData = (data) => {
    const errors = {};
    if (Validator.isEmpty(data.name)) errors.name = 'name can\'t be blank';
    if (Validator.isEmpty(data.duration)) errors.duration = 'duration can\'t be blank';
    return errors;
};