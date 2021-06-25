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

            <Link className={currCount === 0} href="#listar" to="/ListarCliente">
                <span className={currCount === 0}><i class="fas fa-arrow-right"></i>Listar Cliente</span>
            </Link>
            <Link className={currCount === 1} href="#achar" to="/EncontrarCliente">
                <span className={currCount === 1}><i class="fas fa-arrow-right"></i>Achar Cliente</span>
            </Link>
            <Link className={currCount === 2} href="#cadastrar" to="/CadastrarCliente">
                <span className={currCount === 2}><i class="fas fa-arrow-right"></i>Cadastrar Cliente</span>
            </Link>

        </div>

    )
}


export default SubMenuCliente