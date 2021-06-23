import SubMenuCategoria from '../../../components/submenoCategoria/subMenuCategoria';
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputEncontarCategoria from './InputEncontrarCategoria'


const EncontrarCategoria = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCategoria></SubMenuCategoria>
            </div>

            <div className="div_card">
                <div className="sub_div">
                    <h2>Procurar Categoria</h2>
                    <InputEncontarCategoria />
                </div>
            </div>

        </Container>
        <Footer />
    </>
);

export default EncontrarCategoria