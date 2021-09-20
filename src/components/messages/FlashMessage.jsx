import React, { Component } from 'react'

export class FlashMessage extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.deleteFlashMessage(this.props.message.id)
        }, 5000)
    }

    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }

    render() {
        const { text, type } = this.props.message;
        const className = `ui ${type} message`
        return (
            <div className={className}>
                <i onClick={this.onClick} className='close icon' />
                <p>{text}</p>
            </div>
        )
    }
}

export default FlashMessage
