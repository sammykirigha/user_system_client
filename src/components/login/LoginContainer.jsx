import React, { Component } from 'react'
import Validator from 'validator'
import LoginForm from './LoginForm';

export const validate = (data) => {
    const errors = {};
    if (Validator.isEmpty(data.username)) errors.username = 'username can nott bbe empty'
    if (Validator.isEmpty(data.email)) errors.email = 'email can not be empty'
    if (Validator.isEmpty(data.password)) errors.password = 'password can nott be empty'
}

export class LoginContainer extends Component {
    state = {
        data: {
            username: '',
            email: '',
            password: ""
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    })

    onLoginSubmit = e => {
        e.preventDefault()
        alert('login')
    }
    render() {
        return (
            <div>
                <LoginForm 
                    onChange={this.onChange}
                    onLoginSubmit={this.onLoginSubmit}
                />
            </div>
        )
    }
}

export default LoginContainer