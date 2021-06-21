import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cliente.module.css';

import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/footer';

import SubMenuCliente from '../../components/submenuCliente/subMenuCliente'

const Cliente = () => (
  <>

    <Header />
    <Container>

      <div className={styles.Cliente}>

        <SubMenuCliente></SubMenuCliente>

        Cliente Component

      </div>

    </Container>
    <Footer />

  </>

);

Cliente.propTypes = {};

Cliente.defaultProps = {};

export default Cliente;
