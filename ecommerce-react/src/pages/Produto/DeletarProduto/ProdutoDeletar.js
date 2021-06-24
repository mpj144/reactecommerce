import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputDeletarProduto from './InputDeletarProduto'
import '../Input.scss'

const DeletarProduto = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuProduto></SubMenuProduto>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Deletar Produto</h2>
                    <InputDeletarProduto />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default DeletarProduto