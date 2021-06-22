import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';
import TableClientes from '../../components/tableClientes/TableCliente'
import SubMenuCliente from '../../components/submenuCliente/subMenuCliente'

const ClienteLista = () => (
    <>
        <Header />
        <Container>
            <SubMenuCliente></SubMenuCliente>
            <TableClientes />
        </Container>
        <Footer />
    </>
);

export default ClienteLista