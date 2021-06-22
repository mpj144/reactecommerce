import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import ClienteId from '../../../components/ClienteId/ClienteId'
import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'

const ClienteEncontrar = () => (
    <>
        <Header />
        <Container>
            <SubMenuCliente></SubMenuCliente>
            <ClienteId/>
        </Container>
        <Footer />
    </>
);

export default ClienteEncontrar