import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Produto from './pages/Produto/Produto'
import ProdutoLista from './pages/Produto/ListarProduto/ListarProduto'
import ProdutoEncontrar from './pages/Produto/EncontrarProduto/ProdutoEncontrar'
import ProdutoDeletar from './pages/Produto/DeletarProduto/ProdutoDeletar'
import ProdutoAtualizar from './pages/Produto/AtualizarProduto/AtualizarProduto'
import ProdutoCadastrar from './pages/Produto/CadastroProduto/ProdutoCadastrar'

import Categoria from './pages/Categoria/Categoria'
import CategoriaLista from './pages/Categoria/ListaCategoria/ListaCategoria'
import CategoriaEncontrar from './pages/Categoria/EncontrarCategoria/CategoriaEncontrar'
import CategoriaDeletar from './pages/Categoria/DeletarCategoria/CategoriaDeletar'
import CategoriaAtualizar from './pages/Categoria/AtualizarCategoria/AtualizarCategoria'
import CategoriaCadastrar from './pages/Categoria/CadastroCategoria/CategoriaCadastrar'

import Funcionario from './pages/Funcionario/Funcionario'
import FuncionarioLista from './pages/Funcionario/ListarFuncionario/ListarFuncionario'
import FuncionarioEncontrar from './pages/Funcionario/EncontrarFuncionario/FuncionarioEncontrar'
import FuncionarioDeletar from './pages/Funcionario/DeletarFuncionario/FuncionarioDeletar'
import FuncionarioAtualizar from './pages/Funcionario/AtualizarFuncionario/AtualizarFuncionario'
import FuncionarioCadastrar from './pages/Funcionario/CadastroFuncionario/FuncionarioCadastrar'

import Cliente from './pages/Cliente/Cliente'
import ClienteListar from './pages/Cliente/ListaCliente/ClienteListar'
import ClienteEncontrar from './pages/Cliente/EncontrarCliente/ClienteEncontar'
import ClienteDeletar from './pages/Cliente/DeletarCliente/ClienteDeletar'
import ClienteAtualizar from './pages/Cliente/AtualizarCliente/ClienteAtualizar'
import ClienteCadastrar from './pages/Cliente/CadastrarCliente/ClienteCadastrar'

import CartIndex from './pages/Cart/CartIndex'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />

      <Route path="/Produto" component={Produto} />
      <Route path="/ListarProduto" component={ProdutoLista} />
      <Route path="/EncontrarProduto" component={ProdutoEncontrar} />
      <Route path="/DeletarProduto" component={ProdutoDeletar} />
      <Route path="/AtualizarProduto" component={ProdutoAtualizar} />
      <Route path="/CadastrarProduto" component={ProdutoCadastrar} />

      <Route path="/Categoria" component={Categoria} />
      <Route path="/ListarCategoria" component={CategoriaLista} />
      <Route path="/EncontrarCategoria" component={CategoriaEncontrar} />
      <Route path="/AtualizarCategoria" component={CategoriaAtualizar} />
      <Route path="/CadastrarCategoria" component={CategoriaCadastrar} />
      <Route path="/DeletarCategoria" component={CategoriaDeletar} />

      <Route path="/Funcionario" component={Funcionario} />
      <Route path="/ListarFuncionario" component={FuncionarioLista} />
      <Route path="/EncontrarFuncionario" component={FuncionarioEncontrar} />
      <Route path="/DeletarFuncionario" component={FuncionarioDeletar} />
      <Route path="/AtualizarFuncionario" component={FuncionarioAtualizar} />
      <Route path="/CadastrarFuncionario" component={FuncionarioCadastrar} />

      <Route path="/Cliente" component={Cliente} />
      <Route path="/ListarCliente" component={ClienteListar} />
      <Route path="/EncontrarCliente" component={ClienteEncontrar} />
      <Route path="/DeletarCliente" component={ClienteDeletar} />
      <Route path="/AtualizarCliente" component={ClienteAtualizar} />
      <Route path="/CadastrarCliente" component={ClienteCadastrar} />

      <Route path="/Carrinho" component={CartIndex} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
