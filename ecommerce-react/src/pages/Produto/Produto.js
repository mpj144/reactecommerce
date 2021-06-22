import React from 'react';
import PropTypes from 'prop-types';
import styles from './Produto.module.css';

import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';

import SubMenuProduto from '../../components/submenuProduto/subMenuProduto'

const Produto = () => (
  <>
    <Header />
    <Container>
      <SubMenuProduto></SubMenuProduto>
      <div className={styles.Produto}>

        <h1>Produto Component</h1>

      </div>

    </Container>
    <Footer />
    
  </>

);

Produto.propTypes = {};

Produto.defaultProps = {};

export default Produto;
