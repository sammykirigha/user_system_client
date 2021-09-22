import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogging } from '../../redux/actions/login';
import { isTokenExpired } from '../helpers/Helpers';

const formInputstyle = {
    color: 'white',
    fontSize: '15px',
    letterspacing: '1px'
};


const LoginForm = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();
  
    const state = useSelector(state => state.log);

    // const isAuthenticated = () => {
    //     if (!!state.user.token && !isTokenExpired(state.user.token)) {
    //         return true
    //     }
    //     return false
    // }
    // console.log('checking for authentication', isAuthenticated());
    console.log('<<<<<<<<login user>>>>>>',state.user.token);
    const dispatch = useDispatch();

    const onChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onLoginSubmit = e => {
        e.preventDefault();
        dispatch(userLogging(user));

    };

    useEffect(() => {
        if(state?.user?.id) history.push('/projects');
    }, [state.user]);

    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column' />
                <div className='six wide column formBackground'>
                    <h1>Login Page</h1>
                    <Form onSubmit={onLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                      </Button >
                        <p style={formInputstyle}>
                            Do not have an Account?
                             <Link className='auth' to='/auth/signup'>Signup</Link>
                        </p>
                    </Form>
                    
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
