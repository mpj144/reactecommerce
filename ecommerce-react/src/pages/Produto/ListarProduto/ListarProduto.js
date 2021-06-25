import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import TableProdutos from '../../../components/tableProdutos/TableProduto'
import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'

const ProdutoListar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuProduto></SubMenuProduto>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Lista de Produtos</h2>
                    <TableProdutos />
                </div>
            </div>
        </Container>
        <Footer />
    </>
);

export default ProdutoListar