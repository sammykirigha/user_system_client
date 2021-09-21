import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const formInputstyle = {
    color: 'white',
    fontSize: '15px',
    letterspacing: '1px'
};

const [user, setUser] = useStatere

const LoginForm = ({onChange, onLoginSubmit}) => {
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
