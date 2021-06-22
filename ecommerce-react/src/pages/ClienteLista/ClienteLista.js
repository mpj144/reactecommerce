import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';
import TableClientes from '../../components/tableClientes/TableCliente'

const ClienteLista = () =>(
    <>
    <Header />
    <Container>
    
    <TableClientes/>
    </Container>
    <Footer />
    </>
);

export default ClienteLista