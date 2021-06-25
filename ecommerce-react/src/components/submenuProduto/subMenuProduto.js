import React from 'react';
import '../submenuCliente/subMenuCliente.scss';
import { Link } from 'react-router-dom';

const SubMenuProduto = () => {
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setCurrCount(count);
    }

    return (


        <div className="sidebar">

            <Link className={currCount === 0} href="#listar" to="/Produto">
                <span className={currCount === 0}><i class="fas fa-arrow-right"></i>Vitrine Produto</span>
            </Link>

            <Link className={currCount === 0} href="#listar" to="/ListarProduto">
                <span className={currCount === 0}><i class="fas fa-arrow-right"></i>Listar Produto</span>
            </Link>
            <Link className={currCount === 1} href="#achar" to="/EncontrarProduto">
                <span className={currCount === 1}><i class="fas fa-arrow-right"></i>Achar Produto</span>
            </Link>
            <Link className={currCount === 2} href="#cadastrar" to="/CadastrarProduto">
                <span className={currCount === 2}><i class="fas fa-arrow-right"></i>Cadastrar Produto</span>
            </Link>

        </div>

    )
}


export default SubMenuProduto