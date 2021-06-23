import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputAtualizarCliente from './inputAtualizarCliente'


const ClienteAtualizar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCliente></SubMenuCliente>
            </div>

            <div className="div_card">
               
                    <h2>Cadastrar Cliente</h2>
                    <InputAtualizarCliente />
                
            </div>

        </Container>
        <Footer />
    </>
);

export default ClienteAtualizar