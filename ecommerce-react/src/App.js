import './App.css';
import SaudacaoUsuario from './components/SaudacaoUsuario/SaudacaoUsuario'
import SaudacaoVisitante from './components/SaudacaoVisitante/SaudacaoVisitante';
import Menu from './components/Menu/Menu'
const  App = () => {

  const Saudacao = (props) =>{
    const logado = props.logado;
    const nome = props.nome;
    if(logado){
      return <SaudacaoUsuario nome={nome}/>
    }else{
      return <SaudacaoVisitante/>
    }

  }
  return (
  <div>
    <Menu/>
  </div>
  );
  
}

export default App;
