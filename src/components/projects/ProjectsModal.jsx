import React from 'react';

const ProjectsModal = (props) => {
    // onClose = () => {
    //     props.onClose
    // }
        
    return (
        <div className='custom-modal-wrapper'>
            <div className="custom-modal">
                <button className='close' >&times;</button>
                <div className=''> {props.children} sammy kirigha</div>
            </div>
        </div>
    );
};

export default ProjectsModal;
