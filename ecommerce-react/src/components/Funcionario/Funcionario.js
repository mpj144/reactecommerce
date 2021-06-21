import React from 'react';
import PropTypes from 'prop-types';
import styles from './Funcionario.module.css';
import Menu from '../Menu/Menu';

const Funcionario = () => (
  <div className={styles.Funcionario}>
    <Menu/>
    Funcionario Component
  </div>
);

Funcionario.propTypes = {};

Funcionario.defaultProps = {};

export default Funcionario;
