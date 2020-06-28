import React from 'react';
import MessageCreator from './messageCreator';
import MessageBrowser from './messageBrowser';
import './styles.css'

const messages = ({onChange, messageCreated, message, messages, onSubmitMessage, getMessage, tags, addTag, getMessages }) => {
    return (
        <div className="messages-container">
            {/* Crear mensajes */}
            <MessageCreator onChange={onChange} onSubmitMessage={onSubmitMessage} messageCreated={messageCreated} tags={tags} addTag={addTag}/>
            {/* Buscar Mensajes */}
            <MessageBrowser onChange={onChange} message={message} messages={messages} getMessage={getMessage} getMessages={getMessages}/>
        </div>
    )
};

export default messages;