import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NoProjectMessage = () => {
    const {user} = useSelector(state => state.log)
    return (
        <div style={{ margin: '10%', fontSize: '16px'}}>
            <div className='ui centered raised card' style={{padding : '20px', width: '450px', height: '100%'}}>
                <div className="header">
                    Hello <strong> {user.username}</strong> Welcome to our Projects app. We are happy to see you here.
                </div>
                <p>
                    Go to <Link to='/projects/create'> this page </Link>to create your first project
                    or visit <Link to='/projects'> this </Link>
                    to see projects already created by other people.
                </p>
               
            </div>
        </div>
    );
};

export default NoProjectMessage;
