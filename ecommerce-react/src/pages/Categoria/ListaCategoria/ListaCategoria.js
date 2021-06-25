import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import TabelaCategoria from '../../../components/tabelaCategoria/tabelaCategoria'
import SubMenuCategoria from '../../../components/submenuCategoria/subMenuCategoria'

const CategoriaListar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCategoria></SubMenuCategoria>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Lista de Categorias</h2>
                    <TabelaCategoria />
                </div>
            </div>


        </Container>
        <Footer />
    </>
);

export default CategoriaListar