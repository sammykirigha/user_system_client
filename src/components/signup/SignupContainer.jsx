import React, { Component, useState } from 'react';
import Validator from 'validator';
import PasswordValidator from 'password-validator';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import { registerUserAction } from '../../redux/actions/auth';
import { useHistory } from 'react-router';


const validatepassword = new PasswordValidator();
validatepassword.is().min(6)
    .is().max(20)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces();

export const validate = (data) => {
    const errors = {};
    if (data.username.length < 3) errors.username = 'username must be at least 3 characters';
    if (Validator.isNumeric(data.username)) errors.username = 'username can\'t be numbers';
    if (!Validator.isAlphanumeric(data.username)) errors.username =
        'username can only contain letters and numbers';
    if (!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) errors.email = 'please provide a valid email';
    if (Validator.isEmpty(data.password)) errors.password = 'Password can\'t be blank';
    if (!validpassword.validate(data.password)) errors.password =
        'password should not have spaces, must be more than 6 characters contain numbers and both lower and uppercase letters';
    if (!Validator.equals(data.password, data.confirm_password)) errors.password = 'passwords do not match';
    return errors;
};

const SignupContainer = () => {
    
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    

    const data = {
        username,
        email,
        password,
        conPassword
    };

    const onSignupSubmit = e => {
        e.preventDefault();
        console.log(user);
        // alert('submit')
        // const errors = validate(data);
        // setErrors(errors);
        // if (Object.keys(errors).length === 0) {
        //     setLoading(true);
            
        // }
    };
    
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
            <div>
                <SignupForm
                    onChange={onChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        );
    };



export default SignupContainer;
