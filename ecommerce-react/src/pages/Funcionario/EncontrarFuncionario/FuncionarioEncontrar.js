import SubMenuFuncionario from '../../../components/submenuFuncionario/subMenuFuncionario'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputEncontarFuncionario from './InputEncontrarFuncionario'

import '../FuncionarioGlobal.scss'

const EncontrarFuncionario = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuFuncionario></SubMenuFuncionario>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Procurar Funcionario</h2>
                    <InputEncontarFuncionario />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default EncontrarFuncionario