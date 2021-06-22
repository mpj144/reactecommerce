import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import ClienteDelete from '../../../components/ClienteDeletar/ClienteDeletar'
import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'

const ClienteDeletar= () => (
    <>
        <Header />
        <Container>
            <SubMenuCliente></SubMenuCliente>
            <ClienteDelete id={10}/>
        </Container>
        <Footer />
    </>
);

export default ClienteDeletar