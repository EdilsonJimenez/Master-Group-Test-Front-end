import React from 'react';
import Message from './message';

const messageBrowser = ({onChange, message, messages, getMessage, getMessages}) => (
    <div className="message-browser-container">
                <h2>Buscar Mensajes</h2>
                <div className="message-browser-id-container"> {/* Buscar por ID */}
                    <h3>
                        Buscar por Id
                    </h3>
                    <div>
                        <p>Id:</p>
                        <input name="idField" onChange={onChange} placeholder="Ingresa un Id de mensaje"></input>
                    </div>
                    <button className="message-button" onClick={getMessage}>Buscar</button>
                    <div> {/* Resultados */}
                        <h4>Resultado:</h4>
                        { message && <Message message={message}/>}
                    </div>
                </div>
                <div className="message-browser-tag-container"> {/* Buscar por ID */}
                    <h3>
                        Buscar por Tag
                    </h3>
                    <div>
                        <p>Tag:</p>
                        <input name="tagField2" onChange={onChange} placeholder="Ingresa una palabra"></input>
                    </div>
                    <button className="message-button" onClick={getMessages}>Buscar</button>
                    <div> {/* Resultados */}
                        <h4>Resultados:</h4>
                        {
                            messages.map(message => (
                                <Message key={message.id} message={message}/>
                            ))
                        }
                    </div>
                </div>
            </div>
);

export default messageBrowser;