import React from 'react'
import SubMenuFuncionario from '../../../components/submenuFuncionario/subMenuFuncionario'

import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';

const FuncionarioLista = () => (
    <>
        <Header />
        <Container>
            <SubMenuFuncionario></SubMenuFuncionario>
            <h2>Lista Funcionarios</h2>
        </Container>
        <Footer />
    </>
);

export default FuncionarioLista