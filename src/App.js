import React, { Component } from 'react';
import Credential from './components/credential/';
import Messages from './components/messages/';
import { createCredential, createMessage, getMessageById, getMessagesByTag } from './services/actions';
import './App.css';

class App extends Component {
  // credential = true;
  constructor() {
    super();
    this.state = {
      credential: false,
      keyField: "",
      secretField: "",
      msgField: "",
      tagField1: "",
      messageCreated: null,
      tags: [

      ],
      idField: "",
      tagField2: "",
      message: null,
      messages: [],
      error: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmitCredential = this.onSubmitCredential.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.addTag = this.addTag.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    
  }

  onSubmitCredential() {
    createCredential(this.state.keyField, this.state.secretField)
    .then(
      result => {
        
        this.setState(
          {
            credential: result.valid,
            error: result.valid ? null : result.message,
          }
        )
      }
    )
  }

  onSubmitMessage() {
    const { msgField, tags, keyField, secretField} = this.state;
    createMessage(msgField, tags, keyField, secretField).then(response => {
      this.setState({ messageCreated: response, msgField:"", tagField1: "", tags: [] });
    })
  }

  getMessage() {
    const { idField, keyField, secretField } = this.state;
    getMessageById(idField, keyField, secretField).then(message => {
      this.setState({
        message: message ? message : null
      })
    })
  }

  addTag() {
    this.setState({
      tags: [...this.state.tags, this.state.tagField1]
    })
  }

  getMessages() {
    const { tagField2, keyField, secretField} = this.state;
    getMessagesByTag(tagField2, keyField, secretField).then(messages => {
      this.setState({
        messages: messages ? messages : []
      })
    })
  }

  render() {
    const { messageCreated, message, messages, tags, error } = this.state;

    return (
      <div className="app-container">
        <h1>Aplicacion de Mensajes</h1>
        {
          !this.state.credential &&
          <Credential errorKey={error} onChange={this.onChange} createCredential={this.onSubmitCredential} />
        }
        {
          this.state.credential &&
          <Messages
            onChange={this.onChange}
            message={message}
            messages={messages}
            onSubmitMessage={this.onSubmitMessage}
            messageCreated={messageCreated}
            getMessage={this.getMessage}
            tags={tags}
            addTag={this.addTag}
            getMessages={this.getMessages}
          />
        }
      </div>
    );
  }
}

export default App;
