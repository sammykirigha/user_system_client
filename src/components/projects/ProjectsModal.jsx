import React from 'react';

const ProjectsModal = ({openModal}) => {
    return (
        <div className='custom-modal-wrapper'>
            <div className="custom-modal">
                <button className='close' onClick={() => {openModal(false)}} >&times;</button>
                <div className=''>{props.children}</div>
            </div>
        </div>
    );
};

export default ProjectsModal;
