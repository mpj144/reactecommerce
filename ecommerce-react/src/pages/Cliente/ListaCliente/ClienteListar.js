import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import TableClientes from '../../../components/tableClientes/TableCliente'
import SubMenuCliente from '../../../components/submenuCliente/subMenuCliente'

const ClienteListar = () => (
    <>
        
            
            
        
        <Header />
        <Container>
            <div className="div_sidebar">
                <SubMenuCliente></SubMenuCliente>
            </div>

            <div className="div_card">
                
                    <h2>Lista de Clientes</h2>
                    <TableClientes />
                
            </div>
        </Container>
        <Footer />
    </>
);

export default ClienteListar