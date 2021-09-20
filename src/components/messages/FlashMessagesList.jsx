import React from 'react'
import FlashMessage from './FlashMessage'

const FlashMessagesList = (props) => {
    const messages = props.messages.map(message => 
        <FlashMessage key={message.id} message={message} deleteFlashMessage={props.deleteFlashMessage} />
        )
    return (
        <div>
            {messages}
        </div>
    )
}

export default FlashMessagesList
