import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <header id='backgroundimg'>
            <div className='ui inverted menu'>
                <li className='item'>
                    User System
                 </li>
                <div className='right menu'>
                    <li className='item'>
                        Login
                    </li>
                    <li className='item'>
                        Dashbord
                     </li>
                    <li className='item'>
                        Logout
                    </li>
                </div>
            </div>
            <div className='text-box'>
                <div className='ui container'>
                    <div className='ui grid'>
                        <div className='column row centered'>
                            <h2>Welcome to our app. You can create account to continue</h2>
                        </div>
                        <div className='three wide column centered'>
                            <button className='ui icon button'>
                                <i className='rocket icon' />
                                <Link to='/auth/login'>Get Started</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Landing;