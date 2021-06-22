import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cliente.module.css';

import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';

import SubMenuCliente from '../../components/submenuCliente/subMenuCliente'

const Cliente = () => (
  <>

    <Header />

    <Container>

      <SubMenuCliente></SubMenuCliente>



      <div className={styles.Cliente}>

        Cliente Component

      </div>

    </Container>
    <Footer />

  </>

);

Cliente.propTypes = {};

Cliente.defaultProps = {};

export default Cliente;
