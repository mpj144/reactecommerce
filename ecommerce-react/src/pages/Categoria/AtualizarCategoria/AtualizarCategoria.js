import SubMenuCategoria from '../../../components/submenuCategoria/subMenuCategoria'
import Header from '../../../components/header/header';
import Container from '../../../components/container/container';
import Footer from '../../../components/footer/footer';
import InputAtualizarCategoria from './inputAtualizarCategoria'


const CategoriaAtualizar = () => (
    <>
        <Header />
        <Container>

            <div className="div_sidebar">
                <SubMenuCategoria></SubMenuCategoria>
            </div>

            <div className="div_card">
               
                    <h2>Atualizar Categoria</h2>
                    <InputAtualizarCategoria />
                
            </div>

        </Container>
        <Footer />
    </>
);

export default CategoriaAtualizar