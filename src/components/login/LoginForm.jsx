import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

const formInputstyle = {
    color: 'white',
    fontSize: '15px',
    letterspacing: '1px'
};

const LoginForm = () => {
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column' />
                <div className='six wide column formBackground'>
                    <h1>Login Page</h1>
                    <Form>
                        <Form.Field>
                            <label htmlFor='username' style={formInputstyle}> username
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='username'
                                />
                            </label>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor='email' style={formInputstyle}>email
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='example@gmail.com'
                                />
                            </label>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor='password' style={formInputstyle}>Password
                               <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                />
                            </label>
                        </Form.Field>
                        <Button primary>Signup</Button>
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
