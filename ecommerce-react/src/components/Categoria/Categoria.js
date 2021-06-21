import React from 'react';
import PropTypes from 'prop-types';
import styles from './Categoria.module.css';
import Menu from '../Menu/Menu';

const Categoria = () => (
  <div className={styles.Categoria}>
    <Menu/>
    Categoria Component
  </div>
);

Categoria.propTypes = {};

Categoria.defaultProps = {};

export default Categoria;
