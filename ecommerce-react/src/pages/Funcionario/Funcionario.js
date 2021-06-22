import React from 'react';
import PropTypes from 'prop-types';
import styles from './Funcionario.module.css';


import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';

import SubMenuFuncionario from '../../components/submenuFuncionario/subMenuFuncionario'

const Funcionario = () => (
  <>
    <Header />
    <Container>
      <SubMenuFuncionario></SubMenuFuncionario>
      <div className={styles.Funcionario}>

        <h1>Funcionario Principal</h1>

      </div>

    </Container>
    <Footer />
  </>

);

Funcionario.propTypes = {};

Funcionario.defaultProps = {};

export default Funcionario;
