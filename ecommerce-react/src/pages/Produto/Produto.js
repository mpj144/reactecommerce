import React from 'react';
import PropTypes from 'prop-types';
import './Produto.css';

import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';
import DataTableTemplatingDemo from './ProdutoVitrine';

import SubMenuProduto from '../../components/submenuProduto/subMenuProduto'

const Produto = () => (
  <>
    <Header />
    <Container>

      <div className="div_sidebar">
        <SubMenuProduto></SubMenuProduto>
      </div>

      <div className="DivTabela">

        <DataTableTemplatingDemo></DataTableTemplatingDemo>

      </div>

    </Container>
    <Footer />

  </>

);

Produto.propTypes = {};

Produto.defaultProps = {};

export default Produto;
