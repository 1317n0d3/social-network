import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
  {name: 'nikolay', id: 1},
  {name: 'sasha', id: 2},
  {name: 'ivan', id: 3},
  {name: 'pavel', id: 4},
];
let messagesData = [
  {message: 'hello world'},
  {message: 'My first message'}
];
let postsData = [
  {message: 'Hello', likeCount: 0},
  {message: 'My first post', likeCount: 10}
];


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
