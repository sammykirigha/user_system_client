import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/login';
import { isTokenExpired } from '../helpers/Helpers';

const Landing = () => {
 
    const dispatch = useDispatch();
    const state = useSelector(state => state.log);

    const isAuthenticated = () => {
        if (!!state?.user?.token && !isTokenExpired(state?.user?.token)) {
            return true;
        }
        return false;
    };
    console.log('checking for authentication', isAuthenticated());


    useEffect(() => {
      isAuthenticated();
    },[state?.user?.token]);
    
    return (
        <header id='backgroundimg'>
            <div className='ui inverted menu'>
                <li className='item'>
                    User System
                 </li>
                <div className='right menu'>
                    {!!isAuthenticated ? 
                        <li className='item'>
                            <Link to='/auth/login'>
                                <i className='sign in icon' />
                            Login
                        </Link>
                        </li>
                        :
                        null
                    };
                    
                    {!isAuthenticated ? 
                        <>
                        <li className='item'>
                            <Link to='/project/create'>
                                <i className='tasks icon' /> Dashboard
                            </Link>
                        </li>
                        <li className='item'>
                            <button className='logout' onClick={() => dispatch(logout())}>
                                Logout <i className='sign out icon' />
                            </button>
                        </li>
                            </>
                        : null
                     }
                   
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

export default connect(null, {logout: logout})(Landing);