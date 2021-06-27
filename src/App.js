import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="main-wrapper__content">
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogPage} /> } />
          <Route path='/news' render={News} />
          <Route path='/music' render={Music} />
          <Route path='/settings' render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
