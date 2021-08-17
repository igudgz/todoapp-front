import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import MyContext from './contexts/MyContext';
import Tarefas from './pages/Tarefas';

function App() {
  const [id, setId] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [data, setData] = React.useState(null);

  return (
    <MyContext.Provider
      value={{ email, setEmail, senha, setSenha, data, setData, id, setId }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/tarefas">
            <Tarefas />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
