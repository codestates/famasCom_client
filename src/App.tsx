import * as React from 'react';
import { Redirect } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import { Main, Login, Signup, ComExplain, Community, MobExplain, ModifyInfo, IDK } from './pages/Index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/ComExplain" component={ComExplain} />
        <Route exact path="/MobExplain" component={MobExplain} />
        <Route exact path="/IDK" component={IDK} />
      </Router>
    </div>
  );
}

export default App;