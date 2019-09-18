import React, { Component } from 'react'

export default class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  clickHandler(event) {
    this.props.clickSubmit(this.state.message);
  }

  changeHandler(event) {
    this.setState({ message: event.target.value })
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