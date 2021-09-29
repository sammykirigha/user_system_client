import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/login';

const ProjectsNavBar = ({ username}) => {
    const sticky = {
        position: 'fixed',
        zIndex: '9',
        width: '100%',
        paddingTop: '1%'
    };
    const dispatch = useDispatch();
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
                <li className='item'>
                    <Link to='/projects'>
                      <i className='tasks icon' /> Dashboard
                    </Link>
                </li>
                <li className="item">
                    <i className='user icon' /> {username}
                </li>
                <li className="item logout" onClick={() => dispatch(logout())} style={{cursor: 'pointer'}}>
                    Logout <i className='sign out icon' />
                </li>
            </div>
        </div>
    );
};

export default ProjectsNavBar;
