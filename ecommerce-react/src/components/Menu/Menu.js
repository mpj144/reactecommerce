import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () =>{
  return(
  <div className={styles.Menu}>
    <Link to ="/"><h3>Main</h3></Link>
    <Link to ="/Cliente"><h3>Cliente</h3></Link>
    <Link to ="/Produto"><h3>Produto</h3></Link>
    <Link to ="/Categoria"><h3>Categoria</h3></Link>
    <Link to ="/Funcionario"><h3>Funcionario</h3></Link>
  </div> 
  ); 
}

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
