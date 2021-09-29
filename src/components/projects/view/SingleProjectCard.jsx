// import { Popover } from 'bootstrap';
import React, { useState } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import {Popup } from 'semantic-ui-react';
import ConfirmDelete from './ConfirmDelete';
import ConfirmUpdate from './ConfirmUpdate';

const SingleProjectCard = ({ project, page }) => {
    const [modalOpen, setModalOpen] = useState(false)

    //formate date
    let date = new Date(project.start_date)
    const dateString = moment(date).format('YYYY-MM-DD');

   const content = (
    <>
           <h6>All Tasks for this project</h6>
            <ul>
                
               {['react', 'redux', 'java', 'scala', 'ruby', 'python', 'go'].map(name => 
        
                <Link><li>{name}</li></Link>
             ) }
            </ul>
        {/* <span>No tasks yet <Link>Click here</Link> to create one</span> <br /> */}
        </>
    )
    return (
        <div className='ui card' >
            <div className="content">
                <div className="header" style={{ textTransform: 'capitalize', color: 'blueviolet' }}>Project: {project.project_name} </div> <br />
                <div className='header' style={{ textTransform: 'capitalize', color: 'blueviolet' }}>Project Id: {project.id}</div>
            </div>
            <div className="content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',}}>
                <div className='project-image' style={{cursor: 'pointer'}}>
                    <img src='https://lh3.googleusercontent.com/proxy/YK0P7YgeFMP_pxQXVFIbwG3tWcI_H1z2wj9pCQUwy6RXjPzvCKbywuflxn2NrI8IydNGqsP95xNK4C1SniG1KRMqOQjAp2XkSshsNQ'
                    alt='project' width='100px' height='100px' />
                </div>
                <div className="" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop:'5px'}}>
                    <span> Start Date: <strong> {dateString}</strong></span>
                    <span> Duration: <strong> {project.duration}</strong></span> 
                </div>
            </div>
            <div className="team" style={{display: 'flex', flexDirection: 'column', color: 'black', padding: '10px'}}>
                <span><strong>Team Lead:</strong> {project.team_lead}</span>
                <span> <strong>Initial Activity:</strong> {project.initial_activity}</span>
            </div>
            <div className='description' style={{ padding: '10px', color: 'black' }}>
                <h6>Project Description</h6>
                <p>{project.description} </p>
            </div>
            <div className="extra content" >
                <div className="ui three buttons">
                    <Popup
                        content={content}
                        on='click'
                        position='top right'
                        pinned
                        trigger={<button className='ui green basic button' content='Button'>Tasks</button>}
                    />
                    <button className='ui teal basic button'> <Link to={`/projects/${project.id}/edit`}>Edit</Link> </button>
                    {/* {modalOpen && <ConfirmUpdate setOpenModal={setModalOpen} />} */}
                    <button className='ui red basic button' onClick={() => { setModalOpen(true) }} >Delete</button>
                    {modalOpen && <ConfirmDelete setOpenModal={setModalOpen} />}
                </div>
            </div>
        </div>
    );
};
{/* <Link to={`/projects/:${project.id}}/edit`}>Edit</Link> */}

export default SingleProjectCard;