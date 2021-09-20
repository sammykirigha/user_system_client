import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const projectsNavBar = () => {
    const pathName = useRouteMatch();
    console.log('path name<<<<<<<>>>>>:',pathName);
    const sticky = {
        position: 'fixed',
        zIndex: '9',
        width: '100%',
        paddingTop: '1%'
    };
    return (
        <div className='ui inverted menu' style={sticky}>
            <li className='item'>
                <Link to='/'>
                    <i className='home icon' /> Projects
                </Link>
            </li>
            <li className='item'>
                <Link to='/projects/create'>
                    Create Project
                </Link>
            </li>
            <li className='item'>
                <Link to='/projects'>
                    My Projects
                </Link>
            </li>
            <div className="right menu">
                <li className="item">
                    <i className='user icon' /> sammy
                </li>
                <li className="item">
                    <Link to='/' className='logout'>
                        Logout <i className='sign out icon' />
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default projectsNavBar;
