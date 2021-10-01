import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isTokenExpired } from '../helpers/Helpers';
import ProjectsNavBar from './projectsNavBar';

const ProjectLayout = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state.log);

  const isAuthenticated = () => {
    if (!!state?.user?.token && !isTokenExpired(state?.user?.token)) {
      return true;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated()) {
          return (
            <div>
              <ProjectsNavBar username={state?.user?.username} />;
              <div
                className="ui grid"
                style={{ backgroundColor: '#f1f1f1', height: '100%' }}
              >
                <div
                  className="twelve wide centered column"
                  style={{ marginTop: '4%' }}
                >
                  <Component {...props} username={state.user.username} />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProjectLayout;
