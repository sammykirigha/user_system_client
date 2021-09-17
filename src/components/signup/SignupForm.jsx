import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const formInputstyle = {
    color: 'white',
    fontSize: '15px',
    letterspacing: '1px'
};

const SignupForm = () => {
    return (
        <div id='backgroundimg'>
            <div className='ui grid'>
                <div className='five wide column' />
                <div className='six wide column formBackground'>
                    <h1>Signup Page</h1>
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
                        <Form.Field>
                            <label htmlFor='cnfpassword' style={formInputstyle}>Confirm Password
                                <input
                                    type='password'
                                    name='cnfpassword'
                                    placeholder='Password'
                                />
                            </label>
                        </Form.Field>
                        <Button primary>Signup</Button>
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

