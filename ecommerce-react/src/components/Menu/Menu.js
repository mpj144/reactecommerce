import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';

import cart from '../../assets/carrinho.png'

import './Menu.css'

const Menu = () => {

  const [cartItens, setCartItens] = useState([]);

  useEffect(() => {

    const storageCart = localStorage.getItem('carrinhoItens')

    if (storageCart) {
      setCartItens(JSON.parse(storageCart))
    }
    else {
      setCartItens([]);
    }

  }, []);

  return (
    <>


      <nav class="app-menu">
        <ul className="app-menu__list">

          <li className="app-menu__item">
            <Link className="app-menu__link" to="/Carrinho">
              <span> {cartItens.length === 1 ? `${cartItens.length} item` : `${cartItens.length} itens`} </span>

              <img src={cart} alt="" className="cart_item" />
            </Link>
          </li>

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
    </>
  )
}
export default Menu
