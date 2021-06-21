import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cliente.module.css';
import Menu from '../Menu/Menu';

const Cliente = () => (
  <div className={styles.Cliente}>
    <Menu/>
    Cliente Component
  </div>
);

Cliente.propTypes = {};

Cliente.defaultProps = {};

export default Cliente;
