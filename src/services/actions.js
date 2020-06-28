import axios from 'axios';
import { createSignature } from './signature';

export const createCredential = async (key, secret) => {
    var response = await axios.post('http://localhost:5000/credentials', {
        key: key,
        shared_secret: secret
    }).then(response => {

        if (response.status === 403) return { valid: false, message: "Ya existe key: " + key }
        if (response.status === 204) return { valid: true, message: "" }
        return { valid: false, message: "Ha ocurrido un error intentalo de nuevo" }
    }).catch(err => {
        return { valid: false, message: "Ha ocurrido un error intentalo de nuevo" }
    });

    return response;
};

export const createMessage = async (msg, tags, key, secret) => {
    const signature = createSignature(secret, {
        msg: msg,
        tags: tags
    });

    var response = await axios.post('http://localhost:5000/message', {
        msg: msg,
        tags: tags
    },
        {
            headers: {
                "x-key": key,
                "x-route": "/message",
                "x-signature": signature
            }
        }
    ).then(response => {

        return response.data;
    }).catch(err => {

        return null;
    });

    return response;
}

export const getMessageById = async (id, key, secret) => {
    const signature = createSignature(secret, {});

    var response = await axios.get('http://localhost:5000/message/' + id,
        {
            headers: {
                "x-key": key,
                "x-route": "/message" + id,
                "x-signature": signature
            }
        })
        .then(response => {
            return response.data;
        }).catch(err => {

            return null;
        });

    return response;
}

export const getMessagesByTag = async (tag, key, secret) => {
    const signature = createSignature(secret, {});

    var response = await axios.get('http://localhost:5000/messages/' + tag,
        {
            headers: {
                "x-key": key,
                "x-route": "messages/" + tag,
                "x-signature": signature
            }
        })
        .then(response => {
            return response.data;
        }).catch(err => {

            return null;
        });

    return response;
}