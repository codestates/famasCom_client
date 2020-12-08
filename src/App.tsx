import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main, ComExplain, MobExplain, IDK, NotFound } from './pages/Index';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ComExplain" component={ComExplain} />
        <Route exact path="/MobExplain" component={MobExplain} />
        <Route exact path="/IDK" component={IDK} />
        <Route component={NotFound} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;