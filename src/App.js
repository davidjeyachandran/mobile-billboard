import React, { Component } from 'react';
import BillboardScreen from './BillboardScreen';
import './App.css';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {message: ''}
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  clickHandler(event) {
    this.props.clickSubmit(this.state.message);
  }

  changeHandler(event) {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Mobile Billboard</h1>
        <form action="">
          <textarea 
            value={this.state.message}
            onChange={this.changeHandler}
            placeholder="Please enter your message" rows="2" type="text" id="message"></textarea>
        </form>
        <button onClick={this.clickHandler} className="button" id="submit">Submit</button>
      </div>
    )
  }
}

const Confirmation = ({clickConfirmation, url}) => {
  return (
    <div>
      <button onClick={clickConfirmation} className="button">Show Billboard</button>
      <p id="link">{url}</p>
    </div>
  )
}

class Billboard extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 1};
    this.setPage = this.setPage.bind(this);
    this.positionX = 0;
    this.positionY = 0;
    // console.log('length=' + this.getTextWidth(this.props.message, 'normal 20em georgia'));
  }

  setPage(page) {
    this.setState({page: page});
    console.log('page=' +page);
    this.positionX = -730 * (page-1);
  }

  getTextWidth(text, font) {
      // re-use canvas object for better performance
      var canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement("canvas"));
      var context = canvas.getContext("2d");
      context.font = font;
      var metrics = context.measureText(text);
      return Math.floor(metrics.width);
  }

  render() {
    console.log(this.positionX);
      return (
        <div>
          <BillboardScreen text={this.props.message}
            positionX={this.positionX}
            positionY={this.positionY} />
        </div>
        )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {step:1, url: '', message: ''}
    this.clickSubmit = this.clickSubmit.bind(this)
    this.clickConfirmation = this.clickConfirmation.bind(this)
  }

  clickSubmit(message) {
    // send to db
    console.log('clickSubmit');
    this.setState({step: 2, url: 'https://mobilebillboard/?message=' + encodeURI(message), message: message})
  }

  clickConfirmation() {
    console.log('clickConfirmation');
    this.setState({step: 3})
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
