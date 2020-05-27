import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/index';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/login" component={ Login } />
        <Route path="/choose-plan" component={ ChoosePlan } />
      </Switch> 
    </div>
  );
}

export default App;
