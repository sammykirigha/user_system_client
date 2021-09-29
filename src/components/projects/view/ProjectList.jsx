import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { getProjects } from '../../../redux/actions/project';
import SearchComponent from '../SearchComponent';
import SingleProjectCard from './SingleProjectCard';

const ProjectList = () =>  {

    // updateSearch = event => {
    //     this.setState({search: event.target.value})
    // }

    const history = useHistory();
    const { user } = useSelector(state => state.log);       
    const {projects} = useSelector(state => state.projects);
    const dispatch = useDispatch()
    
    console.log('projects loaded state:', projects.length);

    useEffect(() => {
        if(!user?.id) history.push('/auth/login');
    }, [user]);

    useEffect(() => {
      dispatch(getProjects())
    }, [dispatch])
    
     console.log('the history',history);
        return (
            <div>
                <SearchComponent />
                {projects.length === 0 ? (
                <div style={{ margin: '10%', fontSize: '16px'}}>
                 <div className='ui centered raised card' style={{padding : '20px', width: '450px', height: '100%'}}>
                    <p>
                      No recrent projects available, visit
                      <Link to='/projects/create'> this page  </Link>
                      to create the most  recent projects
                    </p>
                 </div>
                </div>
                   
                ) : ( 
                    <div className = 'ui three cards grey'>
                            {projects?.map((project) => (
                                <SingleProjectCard
                                    project={project}
                                    // pathName={location.pathname}
                                    key={project.id}
                                />
                            )
                            )}

                    </div>
                )}
                
            </div>
        );
    };

export default ProjectList;
