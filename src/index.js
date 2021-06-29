import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage, addPost, subscribe, updateMessageText, updatePostText } from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
            addPost={ addPost }
            addMessage={ addMessage }
            updatePostText={updatePostText}
            updateMessageText={updateMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
