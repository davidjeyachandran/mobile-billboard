import React, { Component } from 'react';
import BillboardScreen from './BillboardScreen';

export default class Billboard extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.positionX = 0;
    this.positionY = 0;
    // console.log('length=' + this.getTextWidth(this.props.message, 'normal 20em georgia'));
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
    return (
      <div>
        <BillboardScreen text={this.props.message}
          positionX={this.positionX}
          positionY={this.positionY} />
      </div>
    )
  }
}