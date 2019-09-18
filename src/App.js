import React, { Component } from 'react';
import MessageForm from './components/MessageForm'
import { Confirmation } from './components/Confirmation'
import Billboard from './components/Billboard'
import { postData } from './APIfunctions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { step: 1, url: '', message: '' }
    this.clickSubmit = this.clickSubmit.bind(this)
    this.clickConfirmation = this.clickConfirmation.bind(this)
  }

  clickSubmit(message) {
    // send to db
    postData({ message: message }, (data) => this.setState({ message: data }))
    console.log('clickSubmit');
    this.setState({ step: 2, url: 'https://mobilebillboard/?message=' + encodeURI(message), message: message })
  }

  clickConfirmation() {
    console.log('clickConfirmation');
    this.setState({ step: 3 })
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <MessageForm clickSubmit={this.clickSubmit} />
      case 2:
        return <Confirmation clickConfirmation={this.clickConfirmation} url={this.state.url} />
      case 3:
        return <Billboard message={this.state.message} size="" />
      default:
        return;
    }
  }
}

export default App;
