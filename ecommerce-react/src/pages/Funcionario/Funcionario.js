import React from 'react';
import PropTypes from 'prop-types';
import styles from './Funcionario.module.css';


import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';

const Funcionario = () => (
  <>
    <Header />
    <Container>

      <div className={styles.Funcionario}>

        Funcionario Component

</div>

    </Container>
    <Footer />
  </>

);

Funcionario.propTypes = {};

Funcionario.defaultProps = {};

export default Funcionario;
