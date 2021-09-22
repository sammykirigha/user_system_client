import moment from 'moment'
import React, { Component } from 'react'
import ProjectForm from '../ProjectForm'

export class EditProjectContainer extends Component {
    state = {
        data: {
            id: '',
            name: '',
            duration: '',
            start_date: moment()
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    })
    render() {
        return (
            <div>
                <ProjectForm
                    state={this.state}
                    buttonText='Update'
                /> 
            </div>
        )
    }
}

export default EditProjectContainer
