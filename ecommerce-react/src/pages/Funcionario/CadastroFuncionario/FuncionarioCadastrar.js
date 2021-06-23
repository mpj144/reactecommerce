import SubMenuFuncionario from '../../../components/submenuFuncionario/subMenuFuncionario'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputCadastrar from './InputCadastrar'

import '../FuncionarioGlobal.scss'

const FuncionarioCadastrar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuFuncionario></SubMenuFuncionario>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Cadastrar Funcionario</h2>
                    <InputCadastrar />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default FuncionarioCadastrar