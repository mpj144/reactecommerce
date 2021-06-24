import React from 'react';
import './subMenuCliente.scss'
import { Link } from 'react-router-dom';

const SubMenuCliente = () => {
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setCurrCount(count);

    }

    return (


        <div className="sidebar">

            <Link className={currCount === 0 && 'active'} href="#listar" to="/ListarCliente">
                <span className={currCount === 0 && 'text-active'}><i class="fas fa-arrow-right"></i>Listar Cliente</span>
            </Link>
            <Link className={currCount === 1 && 'active'} href="#achar" to="/EncontrarCliente">
                <span className={currCount === 1 && 'text-active'}><i class="fas fa-arrow-right"></i>Achar Cliente</span>
            </Link>
            <Link className={currCount === 2 && 'active'} href="#cadastrar" to="/CadastrarCliente">
                <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i>Cadastrar Cliente</span>
            </Link>
            <Link className={currCount === 3 && 'active'} href="#atualizar" to="/AtualizarCliente">
                <span className={currCount === 3 && 'text-active'}><i class="fas fa-arrow-right"></i>Atualizar Cliente</span>
            </Link>
            <Link className={currCount === 4 && 'active'} href="#deleter" to='/DeletarCliente'>
                <span className={currCount === 4 && 'text-active'}><i class="fas fa-arrow-right"></i>Deletar Cliente</span>
            </Link>
        </div>

    )
}


export default SubMenuCliente