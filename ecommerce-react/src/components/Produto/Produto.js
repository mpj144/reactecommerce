import React from 'react';
import PropTypes from 'prop-types';
import styles from './Produto.module.css';
import Menu from '../Menu/Menu'

const Produto = () => (
  <div className={styles.Produto}>
    <Menu/>
    Produto Component
  </div>
);

Produto.propTypes = {};

Produto.defaultProps = {};

export default Produto;
