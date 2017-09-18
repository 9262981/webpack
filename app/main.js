//main.js 
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());



//Greeter,js babel-loader,react react-dom 安装完成以后

// import React from 'react';
// import {render} from 'react-dom';
// import Greeter from './Greeter';

// render(<Greeter />, document.getElementById('root'));

//main.js 引入cssloader以后
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));
