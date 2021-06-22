import React from 'react'
import SubMenuFuncionario from '../../../components/submenuFuncionario/subMenuFuncionario'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';

import TabelaFuncionarios from './TabelaFuncionarios'

import './ListarFuncionario.scss'

const FuncionarioLista = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuFuncionario></SubMenuFuncionario>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Lista de Funcionarios</h2>
                    <TabelaFuncionarios />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default FuncionarioLista