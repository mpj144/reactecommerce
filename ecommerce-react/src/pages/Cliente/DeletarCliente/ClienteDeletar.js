import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputDeletarCliente from './InputDeletarCliente'
import '../Input.scss'

const DeletarCliente = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCliente></SubMenuCliente>
            </div>

            <div className="div_card">

                    <h2>Deletar Cliente</h2>
                    <InputDeletarCliente />
            
            </div>

        </Container>
        <Footer />
    </>
);

export default DeletarCliente