import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cliente from './components/Cliente/Cliente'
import Produto from './components/Produto/Produto'
import Categoria from './components/Categoria/Categoria'
import Funcionario from './components/Funcionario/fu'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/Cliente" component={Cliente}/>
      <Route path="/Produto" component={Produto}/>
      <Route path="/Categoria" component={Categoria}/>
      <Route path="/Funcionario" component={Funcionario}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
