//CommonJS的风格
// var sub = require('./sub');
// require('./main.css');
// var $ = require('jquery');
// var moment = require('moment');


// var app  = document.createElement('div');
// app.innerHTML = '<h1>Hello World</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);

// app.appendChild(sub());
// $('body').append('<p>look at me! now is ' + moment().format() + '</p>');

//ES6的风格
import './main.css';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';
// import './plugin.js';
//这种写法 把jQuery这个变量直接插入到plugin.js里面了
//相当于在这个文件的开始添加了 var jQuery = require('jquery');
import 'imports-loader?jQuery=jquery!./plugin.js';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());