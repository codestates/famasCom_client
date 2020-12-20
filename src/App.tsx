import React from 'react';
import './App.css';
import { Main, Login, Signup, Community, ModifyInfo, Computer, Mobile, IDK } from './pages';
import { Mouse, Keyboard } from 'pages/lectures/comLectures';
import { CommuJoin, MemberJoin } from 'pages/lectures/idkLectures';
import { Wifi, Message, NaverMap } from 'pages/lectures/mobLectures';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/Lecture/Computer" component={Computer} />
          <Route exact path="/Lecture/Computer/Mouse" component={Mouse} />
          <Route exact path="/Lecture/Computer/Keyboard" component={Keyboard} />
          <Route exact path="/Lecture/Mobile" component={Mobile} />
          <Route exact path="/Lecture/Mobile/Wifi" component={Wifi} />
          <Route exact path="/Lecture/Mobile/Message" component={Message} />
          <Route exact path="/Lecture/Mobile/NaverMap" component={NaverMap} />
          <Route exact path="/Lecture/IDK" component={IDK} />
          <Route exact path="/Lecture/IDK/CommuJoin" component={CommuJoin} />
          <Route exact path="/Lecture/IDK/MemberJoin" component={MemberJoin} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/ModifyInfo" component={ModifyInfo} />
      </Router>
    </div>
    </>
  );
}

export default App;