import SubMenuProduto from '../../../components/submenuProduto/subMenuProduto'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputCadastrarProduto from './InputCadastrar.js'


const ProdutoCadastrar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuProduto></SubMenuProduto>
            </div>

            <div className="div_card">
               
                    <h2>Cadastrar Produto</h2>
                    <InputCadastrarProduto />
                
            </div>

        </Container>
        <Footer />
    </>
);

export default ProdutoCadastrar