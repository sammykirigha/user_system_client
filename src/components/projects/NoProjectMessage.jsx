import React from 'react';
import { Link } from 'react-router-dom';

const NoProjectMessage = () => {
    return (
        <div style={{margin : '10%', fontSize : '16px'}}>
            <div className='ui centered raised card' style={{padding : '10px', width: '350px'}}>
                <div className="header">
                    Welcome to our Projects app Sammy. We are happ to see you here.
                </div>
                <p>
                    Go to <Link to='/projects/create'>this page</Link>to create your first event or visit <Link to='/projects'>this</Link>
                    to see projects created by other people.
                </p>
                <p>
                    No recrent projects available, visit
                     <Link to='/projects/create'>this page</Link>
                    to create the most  recent projects
                </p>
            </div>
        </div>
    );
};

export default NoProjectMessage;
