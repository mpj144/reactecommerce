import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputCadastrarCliente from './InputCadastrar'


const ClienteCadastrar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCliente></SubMenuCliente>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Cadastrar Cliente</h2>
                    <InputCadastrarCliente />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default ClienteCadastrar