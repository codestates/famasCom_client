import React from 'react';
import './App.css';
import { Main, Login, Signup, Community, ModifyInfo, Lecture, Computer, Mobile, IDK, Game } from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
    <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/Lecture" component={Lecture} />
          <Route exact path="/Lecture/Computer" component={Computer} />
          <Route exact path="/Lecture/Mobile" component={Mobile} />
          <Route exact path="/Lecture/IDK" component={IDK} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/ModifyInfo" component={ModifyInfo} />
          {/* <Route exact path="/About" component={About} /> */}
      </Router>
      </div>
      </>
  );
}

export default App;
//