import React, { useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userRegister } from '../../redux/actions/auth';

const formInputstyle = {
    color: 'white',
    fontSize: '15px',
    letterspacing: '1px'
};

const SignupForm = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        conPassword: ''
    })
    const { registerMessage } = useSelector(state => state.reg)
    console.log(registerMessage);
    const reg = useSelector(state => state.reg)
    const dispatch = useDispatch()
    const history = useHistory()

    const onChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(user);
        dispatch(userRegister(user))
        history.push('/auth/login')
        console.log('state<<<>>>>',reg);
    }
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column' />
                <div className='six wide column formBackground'>
                    <h1>Signup Page</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                name='username'
                                type="text"
                                placeholder="Enter username"
                                onChange={onChange}
                            />
                        </Form.Group>
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
                        <Form.Group className="mb-3" controlId="formBasicCnPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name='conPassword'
                                type="password"
                                placeholder="Password" 
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                      </Button >
                        <p style={formInputstyle}>
                            Already registered?
                             <Link className='auth' to='/auth/login'>Login</Link>
                        </p>
                    </Form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignupForm;

