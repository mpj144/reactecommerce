import React from 'react';
import PropTypes from 'prop-types';
import styles from './Produto.module.css';

import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Menu from '../../components/menu/Menu';
import Footer from '../../components/footer/footer';

const Produto = () => (
  <>
    <Header />
    <Container>

      <div className={styles.Produto}>

        Produto Component

    </div>

    </Container>
    <Footer />
  </>

);

Produto.propTypes = {};

Produto.defaultProps = {};

export default Produto;
