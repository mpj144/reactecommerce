import SubMenuCategoria from '../../../components/submenoCategoria/subMenuCategoria'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputCadastrar from './InputCategoria'


const CategoriaCadastrar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCategoria></SubMenuCategoria>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Cadastrar Categoria</h2>
                    <InputCadastrar />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default CategoriaCadastrar