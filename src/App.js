import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="main-wrapper__content">
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/friends" render={() => <FriendsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
