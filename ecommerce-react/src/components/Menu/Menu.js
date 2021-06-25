import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Menu.css'

const Menu = () => (
  <nav class="app-menu">
    <ul className="app-menu__list">

      <li className="app-menu__item">
        <Link className="app-menu__link" to="/">
          Home
        </Link>
      </li>

      <li className="app-menu__item">
        <Link className="app-menu__link" to="/ListarCliente">
          Cliente
        </Link>
      </li>

      <li className="app-menu__item">
        <Link className="app-menu__link" to="/Produto">
          Produto
        </Link>
      </li>

      <li className="app-menu__item">
        <Link className="app-menu__link" to="/ListarCategoria">
          Categoria
        </Link>
      </li>

      <li className="app-menu__item">
        <Link className="app-menu__link" to="/ListarFuncionario">
          Funcionario
        </Link>
      </li>

    </ul>
  </nav>

)

export default Menu
