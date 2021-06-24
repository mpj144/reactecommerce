import SubMenuCategoria from '../../../components/submenuCategoria/subMenuCategoria'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputDeletarCategoria from './InputDeletarCategoria'
import './Input.scss'

const DeletarCategoria = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCategoria></SubMenuCategoria>
            </div>

            <div className="div_card">

                    <h2>Deletar Categoria</h2>
                    <InputDeletarCategoria />
            
            </div>

        </Container>
        <Footer />
    </>
);

export default DeletarCategoria