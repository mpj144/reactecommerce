import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputEncontarCliente from './InputEncontrarCliente'


const EncontrarCliente = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCliente></SubMenuCliente>
            </div>

            <div className="div_card">
                
                    <h2>Procurar Cliente</h2>
                    <InputEncontarCliente />
                
            </div>

        </Container>
        <Footer />
    </>
);

export default EncontrarCliente