import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cliente from './pages/Cliente/Cliente'
import Produto from './pages/Produto/Produto'
import Categoria from './pages/Categoria/Categoria'
import Funcionario from './pages/Funcionario/Funcionario'
import ClienteLista from './pages/ClienteLista/ClienteLista'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Cliente" component={Cliente} />
      <Route path="/Produto" component={Produto} />
      <Route path="/Categoria" component={Categoria} />
      <Route path="/Funcionario" component={Funcionario} />
      <Route path="/Lista" component={ClienteLista} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
