import React from 'react'

const SingleProjectCard = () => {
    return (
        <div className='ui card'>
            <div className="content">
                <div className="header" style={{textTransform: 'capitalize'}}>Cleaning</div>
            </div>
            <div className="content">
                <div className="meta">
                    <span>Project Id: 4</span> <br />
                    <span>Project Name: Cleaning</span> <br />
                    <span>Project Duration: 3 weeks</span> <br />
                    <span>Project Start Date: 09/10/2020</span>
                </div>
            </div>
            <div className="extra content">
                <div className="ui three buttons">
                    <button className='ui teal basic button'>Edit</button>
                    <button className='ui red basic button'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProjectCard
