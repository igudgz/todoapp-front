import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {
  return <Router>
   <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          
        </Switch>
  </Router>;
}

export default App;
