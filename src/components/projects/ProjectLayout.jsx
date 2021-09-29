import React from 'react';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import { logout } from '../../redux/actions/login';
import {isTokenExpired } from '../helpers/Helpers';
import ProjectsNavBar from './projectsNavBar';

const ProjectLayout = ({ component: Component, ...rest }) => {
    const state = useSelector(state => state.log);
    // const { page, logout } = rest;
    const isAuthenticated = () => {
        if (!!state?.user?.token && !isTokenExpired(state?.user?.token)) {
            return true;
        }
    };
    console.log('project layout state', isAuthenticated());
    return (
        <Route {...rest} render={matchProps => isAuthenticated ? (
            <div>
                <ProjectsNavBar username={state?.user?.username}  />
                <div className="ui grid" style={{ backgroundColor: '#f1f1f1', height: '100%'}}>
                    <div className="twelve wide centered column" style={{ marginTop: '4%' }}>
                        <Component {...matchProps} username={state.user.username} />
                    </div>
                </div>
            </div>
        )
            :
            (<Redirect to={{ pathname: '/auth/login', state: {from: rest.location}}} />)
    } />     
    );
};

export default ProjectLayout;
