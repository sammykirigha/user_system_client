import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchComponent from '../SearchComponent'
import SingleProjectCard from './SingleProjectCard'

class ProjectList extends Component {
    state = {
        search:''
    }

    updateSearch = event => {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <div>
                <SearchComponent onChange={this.updateSearch} />
                <div className="ui three cards">
                    <SingleProjectCard
                        // project={}
                        // pathName={location.pathname}
                        // key={peoject.id}
                    />
                </div>
            </div>
        )
    }
}

export default ProjectList
