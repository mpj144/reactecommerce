import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputEncontarProduto from './InputEncontrarProduto'

import '../../Produto/ListarProduto/ProdutoGlobal.scss'

const EncontrarProduto = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuProduto></SubMenuProduto>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Procurar Produto</h2>
                    <InputEncontarProduto />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default EncontrarProduto