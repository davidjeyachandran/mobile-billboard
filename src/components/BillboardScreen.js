import React from 'react';
// import './App.css';

function BillboardScreen({text, positionX, positionY}) {
  let style = {
    transform: 'translate(' + positionX + 'px, ' + positionY + 'px)'
  }

  function setIntervalX(callback, delay, repetitions) {
      var x = 0;
      var intervalID = window.setInterval(function () {
         callback();
         if (++x === repetitions) {
             window.clearInterval(intervalID);
         }
      }, delay);
  }

  setIntervalX(function () {
      var element = document.getElementById('text_container');
      element.scrollLeft +=4;

  }, 15, 5000);

  return (
    <div id="text_container" className="container">

      <h2 id="text" style={style}>{text}</h2>
    </div>
    );
}

export default BillboardScreen;