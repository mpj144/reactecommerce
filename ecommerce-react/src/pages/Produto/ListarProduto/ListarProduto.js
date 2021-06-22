import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import TableProdutos from '../../../components/tableProdutos/TableProduto'
import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'

const ProdutoListar = () => (
    <>
        <Header />
        <Container>
            <SubMenuProduto></SubMenuProduto>
            <TableProdutos />
        </Container>
        <Footer />
    </>
);

export default ProdutoListar