import React, { Component } from 'react'
import moment from 'moment'
import ProjectForm from '../ProjectForm'

export class CreateProjectContainer extends Component {
    state = {
        data: {
            name: '',
            duration: '',
            start_date: moment()
        },
        loading: false,
        errors: {}
    }

    onChange = () => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    })

    handleDismiss = () => {
        this.setState({
            errors : {}
        })
    }

    handleDate = date => this.setState({
        data: {...this.state.data, start_date: date}
    })
    render() {
        return (
            <div>
                <ProjectForm
                  handleDate={this.handleDate}
                  handleDismiss={this.handleDismiss}
                  state={this.state}
                  buttonText='Create'
                />
            </div>
        )
    }
}

export default CreateProjectContainer
