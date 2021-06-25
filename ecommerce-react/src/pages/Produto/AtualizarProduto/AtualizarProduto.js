import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputAtualizarProduto from './InputAtualizarProduto'


const ProdutoAtualizar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuProduto></SubMenuProduto>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Atualizar Produto</h2>
                    <InputAtualizarProduto />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default ProdutoAtualizar