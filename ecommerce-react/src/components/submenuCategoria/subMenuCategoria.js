import React from 'react';
import '../submenuCliente/subMenuCliente.scss'
import { Link } from 'react-router-dom';

const SubMenuCategoria = () => {
    const [currCount, setCurrCount] = React.useState(0);

    const onClickTab = (count) => {
        setCurrCount(count);

    }

    return (


        <div className="sidebar">
            <Link className={currCount === 0} href="#listar" onClick={() => onClickTab(0)} to="/ListarCategoria">
                <span className={currCount === 0}><i class="fas fa-arrow-right"></i>Listar Categoria</span>
            </Link>
            <Link className={currCount === 1} href="#achar" onClick={() => onClickTab(1)} to="/EncontrarCategoria">
                <span className={currCount === 1}><i class="fas fa-arrow-right"></i>Achar Categoria</span>
            </Link>
            <Link className={currCount === 2 } href="#cadastrar" to="/CadastrarCategoria">
                <span className={currCount === 2 && 'text-active'}><i class="fas fa-arrow-right"></i>Cadastrar Categoria</span>
            </Link>
            <Link className={currCount === 2} href="#deletar" onClick={() => onClickTab(2)} to="/DeletarCategoria">
                <span className={currCount === 2}><i class="fas fa-arrow-right"></i>Deletar Categoria</span>
            </Link>
            <Link className={currCount === 3} href="#atualizar" onClick={() => onClickTab(3)} to="/AtualizarCategoria">
                <span className={currCount === 3}><i class="fas fa-arrow-right"></i>Atualizar Categoria</span>
            </Link>
        </div>

    )
}

export default SubMenuCategoria