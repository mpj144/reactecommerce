import React from 'react';
import PropTypes from 'prop-types';
import styles from './Categoria.module.css';


import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/footer';

const Categoria = () => (

  <>
    <Header />
    <Container>

      <div className={styles.Categoria}>

        Categoria Component

    </div>

    </Container>
    <Footer />
  </>

);

Categoria.propTypes = {};

Categoria.defaultProps = {};

export default Categoria;
