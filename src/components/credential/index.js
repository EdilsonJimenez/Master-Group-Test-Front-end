import React from 'react';

import './styles.css'

const credential = ({ errorKey, onChange, createCredential }) => (
    <div className="credential-container">
        <h3>Crear credencial</h3>

        <div className="key-field">
            <span>Key</span>
            <input name="keyField" type="text" placeholder="Escribe aqui" onChange={onChange}></input>
            {
                errorKey &&
                <span className="error">Ya existe Esta llave</span>
            }
        </div>
        <div className="secret-field">
            <span>Shared secret</span>
            <input name="secretField" type="text" placeholder="Escribe aqui" onChange={onChange}></input>
        </div>
            <button className="credential-button" onClick={createCredential}>
            Crear
            </button>

    </div>
)

export default credential;