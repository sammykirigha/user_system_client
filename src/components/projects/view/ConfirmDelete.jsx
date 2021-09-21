import React from 'react';

const ConfirmDelete = (props) => {
    return (
        <div className='ui grid confirm-modal'>
            <div className="ten wide column">
                <p>
                    are you sure you want to delete this project
                </p>
            </div>
            <div className="four wide column">
                <div className="ui buttons">
                    <button className='ui primary button'>Cancel</button>
                    <div className="or" />
                    <button className='ui red button'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;
