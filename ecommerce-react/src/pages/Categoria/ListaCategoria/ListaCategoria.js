import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import TabelaCategoria from '../../../components/tabelaCategoria/tabelaCategoria'
import SubMenuCategoria from '../../../components/submenoCategoria/subMenuCategoria'

const CategoriaListar = () => (
    <>
        <Header />
        <Container>
            <SubMenuCategoria></SubMenuCategoria>
            <TabelaCategoria />
        </Container>
        <Footer />
    </>
);

export default CategoriaListar