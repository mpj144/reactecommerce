import React from 'react';
import '../submenuCliente/subMenuCliente.scss'
import { Link } from 'react-router-dom';

const SubMenuCliente = () => {
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setCurrCount(count);

    }

    return (


        <div className="sidebar">

            <Link className={currCount === 0} href="#listar" onClick={() => onClickTab(0)} to="/ListarFuncionario">
                <span className={currCount === 0}><i class="fas fa-arrow-right"></i>Listar Funcionario</span>
            </Link>

            <Link className={currCount === 1} href="#achar" onClick={() => onClickTab(1)} to="/EncontrarFuncionario">
                <span className={currCount === 1}><i class="fas fa-arrow-right"></i>Achar Funcionario</span>
            </Link>

            <Link className={currCount === 2} href="#deletar" onClick={() => onClickTab(2)} to="/CadastrarFuncionario">
                <span className={currCount === 2}><i class="fas fa-arrow-right"></i>Cadastrar Funcionario</span>
            </Link>

        </div>

    )
}


export default SubMenuCliente