// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi there and greetings!";
//   return greet;
// };

// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };


//Greeter,js babel-loader,react react-dom 安装完成以后
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
