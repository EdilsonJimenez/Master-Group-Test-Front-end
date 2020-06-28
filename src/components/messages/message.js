import React from 'react';
import './styles.css';

const message = ({ message }) => (
    <div className="message-container">
        <h5 className="message-key">
            Mensaje:
        </h5>
        <span className="message-value">
            {message.msg}
        </span>
        <br></br>
        <h5 className="message-key">
            Tags:
        </h5>
        {
            message.tags && message.tags.map(tag => (
                <span key={tag} className="message-value">{tag}<br></br></span>
            ))
        }
    </div>
);

export default message;