import './App.css';

import Header from './components/header/header';
import Container from './components/container/container';

import Footer from './/components/footer/footer';


import PaginatorDemo from './pages/Produto/PaginatorDemo';

const App = () => {

  return (


      <>
        <Header />
        <Container >

          <div className="div_card">

            <div className="sub_div">
              <h1>Bem-vindo ao e-commerce Group Five!</h1>
              <PaginatorDemo></PaginatorDemo>
            </div> 
 
          </div>

        </Container>
        <Footer />
      </>

  );



}

export default App;


