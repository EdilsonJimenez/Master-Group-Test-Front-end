import React from 'react';

const messageCreator = ({ onChange, onSubmitMessage, messageCreated, tags, addTag }) => (
    <div className="message-creator-container">
        <h2>Crear Mensaje</h2>
        <div className="message-creator-message-field">
            <p>Mensaje: </p>
            <input name="msgField" onChange={onChange}></input>
        </div>
        <div className="message-creator-message-tag">
            <p>Tags: </p>
            <input name="tagField1" onChange={onChange}></input>
            <div className="message-button-add-container">
            <button className="message-add-tag" onClick={addTag}>Agregar</button>
            </div>
            
            {
                tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))
            }
        </div>
        <button className="message-button" onClick={onSubmitMessage}>
            Crear
        </button>
        <br></br>
        {
            messageCreated && <div>
                <p>{messageCreated.message}</p>
                <p>Id: {messageCreated.id}</p>
                </div>
        }
    </div>
)

export default messageCreator;